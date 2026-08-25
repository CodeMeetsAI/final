from PIL import Image
from pathlib import Path

IMAGE_DIR = Path("public/images")

MAX_WIDTH = 1600
QUALITY = 78

for path in IMAGE_DIR.glob("*.jpg"):
    try:
        with Image.open(path) as img:
            original_size = path.stat().st_size

            # Convert to RGB
            if img.mode != "RGB":
                img = img.convert("RGB")

            # Resize only if wider than 1600px
            if img.width > MAX_WIDTH:
                new_height = int(img.height * MAX_WIDTH / img.width)
                img = img.resize(
                    (MAX_WIDTH, new_height),
                    Image.Resampling.LANCZOS
                )

            # Save compressed version
            img.save(
                path,
                "JPEG",
                quality=QUALITY,
                optimize=True,
                progressive=True
            )

            new_size = path.stat().st_size

            print(
                f"{path.name}: "
                f"{original_size / 1024 / 1024:.2f} MB -> "
                f"{new_size / 1024 / 1024:.2f} MB"
            )

    except Exception as e:
        print(f"ERROR: {path.name} -> {e}")

print("\nDone! All JPG images have been optimized.")