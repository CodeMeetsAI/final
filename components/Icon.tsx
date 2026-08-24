import { SVGProps } from "react";
import {
  FiCheckCircle,
  FiBook,
  FiHeart,
  FiUsers,
  FiHome,
  FiTarget,
  FiStar,
  FiFileText,
  FiClock,
  FiPhone,
  FiMail,
  FiMapPin,
  FiSearch,
  FiChevronDown,
  FiMenu,
  FiX,
  FiFacebook,
  FiInstagram,
  FiYoutube,
} from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";

export type IconName =
  | "check"
  | "book"
  | "heart"
  | "people"
  | "home"
  | "leaf"
  | "target"
  | "star"
  | "doc"
  | "clock"
  | "phone"
  | "mail"
  | "pin"
  | "search"
  | "chevronDown"
  | "menu"
  | "close"
  | "facebook"
  | "instagram"
  | "youtube";

const ICONS: Record<IconName, React.ComponentType<SVGProps<SVGSVGElement>>> = {
  check: FiCheckCircle,
  book: FiBook,
  heart: FiHeart,
  people: FiUsers,
  home: FiHome,
  leaf: LuLeaf,
  target: FiTarget,
  star: FiStar,
  doc: FiFileText,
  clock: FiClock,
  phone: FiPhone,
  mail: FiMail,
  pin: FiMapPin,
  search: FiSearch,
  chevronDown: FiChevronDown,
  menu: FiMenu,
  close: FiX,
  facebook: FiFacebook,
  instagram: FiInstagram,
  youtube: FiYoutube,
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

export default function Icon({ name, className = "h-5 w-5", ...rest }: IconProps) {
  const Component = ICONS[name];
  return <Component className={className} {...rest} />;
}
