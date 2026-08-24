import { ProgramPageData } from "@/components/ProgramPage";

export const programs: Record<string, ProgramPageData> = {
  "parho-pakistan": {
    eyebrow: "Flagship Program",
    title: "Parho Pakistan",
    heroText:
      "Our largest and longest-running initiative — bringing formal and non-formal education to underserved children and youth across Sindh.",
    crumb: "Our Work / Parho Pakistan",
    image: "/images/program-parho-pakistan.jpg",
    storyHeading: "One classroom in Malir, grown into a movement",
    storyParagraphs: [
      "Parho Pakistan began with a single after-school learning centre and has grown into our largest program, combining formal schooling, non-formal catch-up education, literacy initiatives and vocational training under one roof.",
      "Today the program runs 64 learning centres, supports over 18,000 students, and partners with schools such as Malir Public School and AT TUQA to extend its reach further into underserved neighbourhoods.",
    ],
    featuresHeading: "Key components of Parho Pakistan",
    features: [
      {
        icon: "book",
        title: "Formal Education",
        text: "Structured, curriculum-based schooling for children enrolled full-time in Yaqeen-supported classrooms.",
      },
      {
        icon: "check",
        title: "Non-Formal Education",
        text: "Accelerated catch-up learning for out-of-school children to reintegrate into mainstream education.",
      },
      {
        icon: "star",
        title: "ROSHNI Literacy",
        text: "Foundational literacy and numeracy support for children who have never attended school.",
      },
    ],
    statsHeading: "Parho Pakistan by the numbers",
    stats: [
      { number: "18,000+", label: "Students Enrolled" },
      { number: "64", label: "Learning Centres" },
      { number: "92%", label: "Retention Rate" },
      { number: "11 Yrs", label: "Running Since 2015" },
    ],
  },

  "formal-education": {
    eyebrow: "Education · Parho Pakistan",
    title: "Formal Education",
    heroText:
      "Curriculum-based, full-time schooling for children across our partner learning centres in Sindh.",
    crumb: "Our Work / Formal Education",
    image: "/images/program-formal-education.jpg",
    storyHeading: "A classroom experience built for consistency and progression",
    storyParagraphs: [
      "Our Formal Education stream follows the national curriculum across core subjects — Urdu, English, Mathematics and Science — delivered by trained teachers in Yaqeen-supported classrooms across Karachi and rural Sindh.",
      "Students are tracked through structured assessments each term, with additional support provided to those falling behind, ensuring no child is left without a path forward.",
    ],
    featuresHeading: "Key components of Formal Education",
    features: [
      { icon: "book", title: "Structured Curriculum", text: "Aligned with national education standards across all core subjects." },
      { icon: "people", title: "Trained Teachers", text: "Qualified, continuously trained educators in every partner classroom." },
      { icon: "check", title: "Progress Tracking", text: "Termly assessments to monitor and support every student's learning journey." },
    ],
    statsHeading: "Formal Education by the numbers",
    stats: [
      { number: "11,200+", label: "Students Enrolled" },
      { number: "38", label: "Formal Classrooms" },
      { number: "96%", label: "Pass Rate" },
      { number: "210", label: "Trained Teachers" },
    ],
  },

  "non-formal-education": {
    eyebrow: "Education · Parho Pakistan",
    title: "Non-Formal Education",
    heroText:
      "Accelerated, flexible learning pathways for children who have never attended school or dropped out early.",
    crumb: "Our Work / Non-Formal Education",
    image: "/images/program-non-formal-education.jpg",
    storyHeading: "A second chance at a first education",
    storyParagraphs: [
      "Many children we work with have never set foot in a classroom, often due to labour responsibilities or displacement. Our Non-Formal Education centres offer condensed, age-appropriate learning modules that catch students up over 12–18 months.",
      "Once ready, students are transitioned into formal schooling or vocational tracks — whichever path suits their age and circumstances best.",
    ],
    featuresHeading: "Key components of Non-Formal Education",
    features: [
      { icon: "clock", title: "Condensed Curriculum", text: "Fast-paced modules covering years of foundational learning in months." },
      { icon: "target", title: "Flexible Timing", text: "Morning and evening batches to fit around family or work responsibilities." },
      { icon: "check", title: "Transition Support", text: "Guided placement into formal schooling or vocational training once ready." },
    ],
    statsHeading: "Non-Formal Education by the numbers",
    stats: [
      { number: "6,800+", label: "Children Reached" },
      { number: "26", label: "NFE Centres" },
      { number: "74%", label: "Transition Rate" },
      { number: "14 mo", label: "Avg. Program Length" },
    ],
  },

  roshni: {
    eyebrow: "Education · Parho Pakistan",
    title: "ROSHNI",
    heroText: "A foundational literacy and numeracy program lighting the way for children with no prior schooling.",
    crumb: "Our Work / ROSHNI",
    image: "/images/program-roshni.jpg",
    storyHeading: "Building the first building blocks of learning",
    storyParagraphs: [
      "ROSHNI means 'light' — a foundational literacy and numeracy initiative for children starting their education journey from zero.",
      "Before a child can join formal or non-formal classrooms, they often need support with the very basics — recognising letters, forming words, and counting. ROSHNI is designed exactly for this stage. Delivered in small groups with dedicated literacy coaches, sessions run for a few months before children move to the next stage.",
    ],
    featuresHeading: "Key components of ROSHNI",
    features: [
      { icon: "star", title: "Letter & Word Recognition", text: "Structured phonics-based sessions building reading fundamentals." },
      { icon: "check", title: "Basic Numeracy", text: "Counting, number recognition and early arithmetic skills." },
      { icon: "people", title: "Small Group Coaching", text: "Low student-to-coach ratios for individual attention." },
    ],
    statsHeading: "ROSHNI by the numbers",
    stats: [
      { number: "3,400+", label: "Children Supported" },
      { number: "19", label: "ROSHNI Groups" },
      { number: "4–6 mo", label: "Program Duration" },
      { number: "88%", label: "Move-On Rate" },
    ],
  },

  "vocational-training": {
    eyebrow: "Education · Parho Pakistan",
    title: "Vocational & Skills Training",
    heroText: "Practical, market-relevant skills training for youth ready to enter the workforce.",
    crumb: "Our Work / Vocational Training",
    image: "/images/program-vocational-training.jpg",
    storyHeading: "From classroom to career",
    storyParagraphs: [
      "For older students and youth who have completed foundational education, Yaqeen offers vocational training in trades such as tailoring, electrical work, mobile repair and computer literacy — chosen based on local market demand.",
      "Each course pairs classroom instruction with hands-on practice, and graduates receive a certificate along with support connecting to local employment or micro-enterprise opportunities.",
    ],
    featuresHeading: "Key components of Vocational Training",
    features: [
      { icon: "check", title: "Trade-Based Courses", text: "Tailoring, electrical work, mobile repair and computer literacy tracks." },
      { icon: "target", title: "Market-Aligned Skills", text: "Curriculum shaped by demand in local job markets." },
      { icon: "people", title: "Placement Support", text: "Guidance connecting graduates to jobs or micro-enterprise opportunities." },
    ],
    statsHeading: "Vocational Training by the numbers",
    stats: [
      { number: "2,900+", label: "Graduates" },
      { number: "12", label: "Trade Courses" },
      { number: "6 mo", label: "Avg. Course Length" },
      { number: "67%", label: "Employed Within 6 Months" },
    ],
  },

  "at-tuqa-clinic": {
    eyebrow: "Health · Partnership Program",
    title: "AT TUQA Health Clinic",
    heroText: "A collaborative health clinic providing consistent, affordable care in partnership with AT TUQA.",
    crumb: "Our Work / AT TUQA Clinic",
    image: "/photos-3-001 (9)/health.jpg",
    storyHeading: "Reliable healthcare, close to home",
    storyParagraphs: [
      "The AT TUQA Health Clinic collaboration brings general consultations, basic diagnostics and maternal health support to a community that previously had to travel long distances for care.",
      "The clinic operates on a low-cost model, with Yaqeen subsidising treatment for the most vulnerable families identified through our community outreach teams.",
    ],
    featuresHeading: "Key components of AT TUQA Health Clinic",
    features: [
      { icon: "heart", title: "General Consultations", text: "Affordable outpatient care for common illnesses and check-ups." },
      { icon: "check", title: "Maternal Health Support", text: "Prenatal and postnatal care guidance for expecting mothers." },
      { icon: "people", title: "Subsidised Treatment", text: "Reduced-cost care for families identified through outreach." },
    ],
    statsHeading: "AT TUQA Health Clinic by the numbers",
    stats: [
      { number: "9,600+", label: "Patients Treated" },
      { number: "6", label: "Consulting Days / Week" },
      { number: "3", label: "Resident Physicians" },
      { number: "2018", label: "Partnership Since" },
    ],
  },

  "medical-camps": {
    eyebrow: "Health",
    title: "Medical Camps",
    heroText: "Free, one-day medical camps bringing consultations, medicines and screening directly to underserved neighbourhoods.",
    crumb: "Our Work / Medical Camps",
    image: "/images/program-medical-camps.jpg",
    storyHeading: "Healthcare that comes to the community",
    storyParagraphs: [
      "Each medical camp is staffed by volunteer doctors, nurses and pharmacists, offering free consultations, basic lab tests and medicine dispensation in a single day.",
      "Camps are scheduled based on need, identified through our field teams, and are often paired with health awareness sessions on hygiene, nutrition and preventive care.",
    ],
    featuresHeading: "Key components of Medical Camps",
    features: [
      { icon: "heart", title: "Free Consultations", text: "General physician check-ups at no cost to patients." },
      { icon: "doc", title: "Basic Diagnostics", text: "On-site blood pressure, sugar and basic lab screening." },
      { icon: "check", title: "Free Medicines", text: "Essential medication dispensed directly at the camp." },
    ],
    statsHeading: "Medical Camps by the numbers",
    stats: [
      { number: "310+", label: "Camps Held" },
      { number: "27,000+", label: "Patients Served" },
      { number: "120+", label: "Volunteer Medical Staff" },
      { number: "48", label: "Locations Covered" },
    ],
  },

  "health-screening": {
    eyebrow: "Health",
    title: "Health Screening",
    heroText: "Preventive screening drives to catch health issues early, before they become emergencies.",
    crumb: "Our Work / Health Screening",
    image: "/photos-3-001 (9)/problem.jpg",
    storyHeading: "Catching problems before they grow",
    storyParagraphs: [
      "Screening drives cover blood pressure, blood sugar, basic vision checks and child growth monitoring, run alongside our medical camps and school health days.",
      "Patients flagged with concerning results are referred to the AT TUQA Health Clinic or partner hospitals for follow-up care and treatment.",
    ],
    featuresHeading: "Key components of Health Screening",
    features: [
      { icon: "doc", title: "Vital Screening", text: "Blood pressure, blood sugar and BMI checks for adults." },
      { icon: "check", title: "Child Growth Monitoring", text: "Height, weight and nutrition tracking for children." },
      { icon: "heart", title: "Referral Pathway", text: "Direct referral to partner clinics for flagged cases." },
    ],
    statsHeading: "Health Screening by the numbers",
    stats: [
      { number: "14,500+", label: "People Screened" },
      { number: "96", label: "Screening Sessions" },
      { number: "1,900+", label: "Referrals Made" },
      { number: "22", label: "Partner Schools Covered" },
    ],
  },

  saleeqa: {
    eyebrow: "Women Empowerment",
    title: "SALEEQA",
    heroText: "A vocational training and livelihood program giving women practical skills and a path to financial independence.",
    crumb: "Our Work / SALEEQA",
    image: "/images/program-saleeqa.jpg",
    storyHeading: "Skills that build independence",
    storyParagraphs: [
      "SALEEQA offers women hands-on training in tailoring, embroidery, beauty services and home-based food production — trades chosen for their strong local demand and flexibility around family responsibilities.",
      "Beyond training, participants receive support in accessing starter tool kits, micro-loans and connections to local markets, helping many launch small home-based businesses.",
    ],
    featuresHeading: "Key components of SALEEQA",
    features: [
      { icon: "check", title: "Tailoring & Embroidery", text: "Hands-on training in stitching, embroidery and garment finishing." },
      { icon: "star", title: "Beauty & Home Services", text: "Practical courses in beauty services and home-based trades." },
      { icon: "target", title: "Livelihood Support", text: "Starter kits and market linkages to help graduates earn independently." },
    ],
    statsHeading: "SALEEQA by the numbers",
    stats: [
      { number: "4,100+", label: "Women Trained" },
      { number: "340+", label: "Home Businesses Launched" },
      { number: "18", label: "Active Training Centres" },
      { number: "81%", label: "Course Completion Rate" },
    ],
  },

  "livelihood-development": {
    eyebrow: "Women Empowerment",
    title: "Livelihood Development",
    heroText: "Ongoing support helping women and families turn new skills into steady, sustainable income.",
    crumb: "Our Work / Livelihood Development",
    image: "/images/program-livelihood.jpg",
    storyHeading: "From skill to sustainable income",
    storyParagraphs: [
      "Many women complete vocational training but struggle to turn it into steady work. Our Livelihood Development team provides starter equipment, small grants and guidance on pricing, marketing and managing a home-based business.",
      "We also connect graduates into peer support groups, where they can share orders, materials and encouragement — building a small but resilient local economy.",
    ],
    featuresHeading: "Key components of Livelihood Development",
    features: [
      { icon: "check", title: "Starter Equipment", text: "Sewing machines, tool kits and raw material grants for graduates." },
      { icon: "people", title: "Peer Support Groups", text: "Local networks for sharing work, materials and encouragement." },
      { icon: "target", title: "Business Guidance", text: "Basic training in pricing, savings and small-scale marketing." },
    ],
    statsHeading: "Livelihood Development by the numbers",
    stats: [
      { number: "1,750+", label: "Women Supported" },
      { number: "Rs. 38M+", label: "In Starter Grants" },
      { number: "64", label: "Peer Groups Formed" },
      { number: "73%", label: "Reporting Steady Income" },
    ],
  },

  falah: {
    eyebrow: "Community Support",
    title: "FALAH",
    heroText: "Our core relief program providing food, shelter support and emergency assistance to families in crisis.",
    crumb: "Our Work / FALAH",
    image: "/images/program-falah.jpg",
    storyHeading: "Steadying families when they need it most",
    storyParagraphs: [
      "FALAH covers routine ration distribution, emergency relief after floods or crises, education sponsorship for at-risk children, and dedicated support for orphaned children and their guardian families.",
      "Every case is assessed by our field teams to ensure aid reaches the households with the greatest need, with follow-up visits to track recovery over time.",
    ],
    featuresHeading: "Key components of FALAH",
    features: [
      { icon: "home", title: "Food & Ration Support", text: "Monthly ration packs for food-insecure families." },
      { icon: "heart", title: "Emergency Relief", text: "Rapid response aid following floods, fires or other crises." },
      { icon: "people", title: "Orphan & Family Support", text: "Ongoing sponsorship and care for orphaned children." },
    ],
    statsHeading: "FALAH by the numbers",
    stats: [
      { number: "9,200+", label: "Families Assisted" },
      { number: "38,000+", label: "Ration Packs Distributed" },
      { number: "120+", label: "Communities Reached" },
      { number: "11 Yrs", label: "Continuous Operation" },
    ],
  },

  "food-ration-support": {
    eyebrow: "Community Support · FALAH",
    title: "Food & Ration Support",
    heroText: "Monthly ration packages helping food-insecure families meet their basic needs with dignity.",
    crumb: "Our Work / Food & Ration Support",
    image: "/photos-3-001 (9)/ration.jpg",
    storyHeading: "A steady food supply, delivered with dignity",
    storyParagraphs: [
      "Each ration pack includes staple items — flour, rice, pulses, cooking oil and other essentials — sized for an average family of six for one month.",
      "Distribution is done directly at community points identified by our field teams, avoiding long queues or wait times that compromise the dignity of recipients.",
    ],
    featuresHeading: "Key components of Food & Ration Support",
    features: [
      { icon: "home", title: "Monthly Ration Packs", text: "Staple food essentials sized for a family of six." },
      { icon: "check", title: "Direct Distribution", text: "Delivered at accessible community points, not central offices." },
      { icon: "target", title: "Needs-Based Targeting", text: "Households identified through field assessments, not open registration." },
    ],
    statsHeading: "Food & Ration Support by the numbers",
    stats: [
      { number: "38,000+", label: "Ration Packs Distributed" },
      { number: "9,200+", label: "Families Reached" },
      { number: "64", label: "Distribution Points" },
      { number: "11 Yrs", label: "Program Running Since" },
    ],
  },

  "orphan-family-support": {
    eyebrow: "Community Support · FALAH",
    title: "Orphan & Family Support",
    heroText: "Long-term sponsorship and care for orphaned children and the families raising them.",
    crumb: "Our Work / Orphan & Family Support",
    image: "/images/program-orphan-family.jpg",
    storyHeading: "Care that continues, not a one-time gift",
    storyParagraphs: [
      "Losing a parent often means a child's education and basic needs are the first to be sacrificed. Our sponsorship program covers school fees, uniforms and monthly stipends for guardian families raising orphaned children.",
      "Each sponsored child is visited regularly by our field team to monitor wellbeing, school attendance and any additional support the family may need.",
    ],
    featuresHeading: "Key components of Orphan & Family Support",
    features: [
      { icon: "people", title: "Monthly Sponsorship", text: "Recurring financial support for orphaned children and guardians." },
      { icon: "book", title: "Education Coverage", text: "School fees, books and uniforms fully covered." },
      { icon: "heart", title: "Regular Check-Ins", text: "Field visits to monitor wellbeing and school attendance." },
    ],
    statsHeading: "Orphan & Family Support by the numbers",
    stats: [
      { number: "1,480+", label: "Orphans Sponsored" },
      { number: "Rs. 2,500", label: "Monthly Support / Child" },
      { number: "96%", label: "School Attendance Rate" },
      { number: "11 Yrs", label: "Program Running Since" },
    ],
  },

  mahol: {
    eyebrow: "Environment & Climate Action",
    title: "MAHOL",
    heroText: "Our environmental program driving plantation, climate awareness and sustainability at the community level.",
    crumb: "Our Work / MAHOL",
    image: "/images/program-mahol.jpg",
    storyHeading: "Building greener, more resilient communities",
    storyParagraphs: [
      "MAHOL runs tree plantation drives in partnership with schools and local municipalities, alongside awareness sessions on waste management, water conservation and climate risk.",
      "The program also trains community volunteers as local sustainability champions, extending its reach well beyond what our field team could cover alone.",
    ],
    featuresHeading: "Key components of MAHOL",
    features: [
      { icon: "leaf", title: "Plantation Drives", text: "Community and school-based tree planting campaigns." },
      { icon: "target", title: "Climate Awareness", text: "Sessions on waste management, water use and climate risk." },
      { icon: "people", title: "Volunteer Champions", text: "Trained local volunteers extending sustainability outreach." },
    ],
    statsHeading: "MAHOL by the numbers",
    stats: [
      { number: "46,000+", label: "Trees Planted" },
      { number: "120+", label: "Communities Reached" },
      { number: "310", label: "Trained Volunteers" },
      { number: "28", label: "Partner Schools" },
    ],
  },

  "plantation-drives": {
    eyebrow: "Environment · MAHOL",
    title: "Plantation Drives",
    heroText: "Community and school-based tree planting campaigns building long-term environmental resilience.",
    crumb: "Our Work / Plantation Drives",
    image: "/images/program-plantation.jpg",
    storyHeading: "One tree at a time, one community at a time",
    storyParagraphs: [
      "Each drive is organised in partnership with schools or local municipal bodies, with saplings sourced locally and volunteers trained on proper planting and aftercare.",
      "Survival tracking is built into the program — volunteer champions monitor planted saplings for the first two years to ensure long-term growth, not just a one-day planting event.",
    ],
    featuresHeading: "Key components of Plantation Drives",
    features: [
      { icon: "leaf", title: "Community Plantation Events", text: "Organised drives at schools, parks and public land." },
      { icon: "check", title: "Sapling Aftercare", text: "Two-year survival tracking by trained local volunteers." },
      { icon: "people", title: "School Partnerships", text: "Environmental education paired with hands-on planting." },
    ],
    statsHeading: "Plantation Drives by the numbers",
    stats: [
      { number: "46,000+", label: "Trees Planted" },
      { number: "78%", label: "Two-Year Survival Rate" },
      { number: "310", label: "Volunteer Champions" },
      { number: "28", label: "Partner Schools" },
    ],
  },
};

export type ProgramSlug = keyof typeof programs;
