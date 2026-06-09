export const school = {
  name: "Dharmakshetra International School",
  shortName: "Dharmakshetra",
  tagline: "A Place of Righteousness",
  motto: "Building Responsible Citizens for a Better Tomorrow",
  board: "CBSE Affiliated",
  classes: "Nursery to Class 7",
  location: "Machilipatnam, Andhra Pradesh",
  phones: ["+91 99480 03311", "+91 99480 03322"],
  emails: ["contact@dharmakshetraschools.org", "principal@dharmakshetraschools.org"],
  address:
    "Kokanarayanapalem Road, Sultanagaram, Machilipatnam South, Andhra Pradesh — 521003",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export const admissionSteps = [
  {
    step: "01",
    title: "Enquire & Connect",
    desc: "Reach out via the enquiry form or phone. Our team shares details and answers your questions.",
    icon: "Phone",
  },
  {
    step: "02",
    title: "Visit the Campus",
    desc: "Tour our classrooms, labs and gardens, and meet the educators who will guide your child.",
    icon: "MapPin",
  },
  {
    step: "03",
    title: "Submit Application",
    desc: "Complete the registration form and submit the required documents for your child's grade.",
    icon: "FileText",
  },
  {
    step: "04",
    title: "Interaction & Confirmation",
    desc: "A warm, age-appropriate interaction, followed by confirmation of admission and onboarding.",
    icon: "CheckCircle2",
  },
];

export const admissionDocs = [
  "Birth certificate of the child",
  "Transfer Certificate (for Class 1 and above)",
  "Report card / progress report from previous school",
  "Passport-size photographs of the child and parents",
  "Aadhaar card of the child and parents",
  "Residential address proof",
];

// Sample CBSE mandatory disclosure data — replace with the school's official records.
export const disclosures = {
  general: [
    { label: "Name of the School", value: "Dharmakshetra International School" },
    { label: "Affiliation No. / School Code", value: "To be updated" },
    { label: "Complete Address", value: "Kokanarayanapalem Road, Sultanagaram, Machilipatnam South, Andhra Pradesh — 521003" },
    { label: "Principal Name & Qualification", value: "To be updated" },
    { label: "School Email", value: "contact@dharmakshetraschools.org" },
    { label: "Contact Numbers", value: "+91 99480 03311, +91 99480 03322" },
  ],
  documents: [
    "Copy of Affiliation / Upgradation Letter",
    "Copy of Society / Trust Registration Certificate",
    "Copy of No Objection Certificate (NOC) issued by the State Government",
    "Copy of Recognition Certificate under RTE Act, 2009",
    "Building Safety Certificate",
    "Fire Safety Certificate",
    "Self-certification on affiliation bye-laws",
    "Water, Health and Sanitation Certificates",
  ],
};

export const stats = [
  { value: "100%", label: "Secure Campus" },
  { value: "Nursery–7", label: "Classes Offered" },
  { value: "25+", label: "Years of Leadership" },
  { value: "CBSE", label: "Affiliated Curriculum" },
];

import type { Accent } from "./palette";

export const differentiators: {
  icon: string;
  title: string;
  desc: string;
  color: Accent;
}[] = [
  {
    icon: "HeartHandshake",
    title: "Value-Based Education",
    desc: "Rooted in integrity and cultural heritage, shaping character alongside academics.",
    color: "coral",
  },
  {
    icon: "Rocket",
    title: "Future-Ready Learning",
    desc: "Blending tradition with innovation to prepare students for a changing world.",
    color: "sky",
  },
  {
    icon: "Building2",
    title: "World-Class Facilities",
    desc: "Digital classrooms, STEAM labs and creative studios that inspire discovery.",
    color: "teal",
  },
  {
    icon: "ShieldCheck",
    title: "100% Secure Campus",
    desc: "Comprehensive safety, accessibility and medical support for every child.",
    color: "leaf",
  },
  {
    icon: "Sparkles",
    title: "Holistic Development",
    desc: "Academics, arts, sports and wellbeing growing together in harmony.",
    color: "lilac",
  },
  {
    icon: "Globe2",
    title: "Global Outlook",
    desc: "Nurturing curiosity, confidence and a globally competent mindset.",
    color: "sun",
  },
  {
    icon: "GraduationCap",
    title: "Experienced Educators",
    desc: "Dedicated, compassionate teachers committed to every learner's journey.",
    color: "rose",
  },
  {
    icon: "Smile",
    title: "Student Care & Comfort",
    desc: "AC classrooms, transport and wellbeing services that put children first.",
    color: "coral",
  },
];

export const facilities: {
  icon: string;
  title: string;
  desc: string;
  color: Accent;
}[] = [
  { icon: "MonitorPlay", title: "Digital Classrooms", desc: "Smart, interactive learning spaces.", color: "sky" },
  { icon: "FlaskConical", title: "STEAM Labs", desc: "Science, technology, engineering, arts & math.", color: "lilac" },
  { icon: "Library", title: "Library & Studios", desc: "A world of books and creative expression.", color: "coral" },
  { icon: "Trees", title: "Nakshatravanam", desc: "A serene garden connecting students to nature.", color: "leaf" },
  { icon: "Dumbbell", title: "Sports & Athletics", desc: "Building strength, teamwork and spirit.", color: "sun" },
  { icon: "AirVent", title: "AC Classrooms", desc: "Comfortable, focused learning all year.", color: "teal" },
  { icon: "Bus", title: "Transport Facility", desc: "Safe, reliable door-to-door travel.", color: "rose" },
  { icon: "Stethoscope", title: "Medical Support", desc: "On-campus care and wellbeing services.", color: "leaf" },
];

export const leadership = [
  {
    name: "Mr. Kishore Bathina",
    creds: "MBA",
    role: "Founder & Chairman",
    bio: "Over 25 years of entrepreneurial and business experience, driven by a vision to build an institution where righteousness and excellence go hand in hand.",
    initials: "KB",
  },
  {
    name: "Dr. Shireesha M Bathina",
    creds: "Ph.D",
    role: "Director",
    bio: "Two decades in higher education, with an emphasis on academic excellence and compassionate, student-centred leadership.",
    initials: "SB",
  },
];

export const promises = [
  { icon: "Award", title: "Commitment to Excellence", source: "Academic Board" },
  { icon: "TrendingUp", title: "Vision of Growth", source: "School Management" },
  { icon: "Handshake", title: "Promise to Parents", source: "Founding Educators" },
  { icon: "Brain", title: "Shaping Young Minds", source: "Principal's Desk" },
  { icon: "Users", title: "Dedicated Educators", source: "Faculty Team" },
];

export const news = [
  {
    tag: "Admissions Open",
    date: "2025–26 Academic Year",
    title: "Admissions open for Nursery to Class 7",
    desc: "Join a community where learning extends beyond textbooks. Limited seats available across all grades.",
  },
  {
    tag: "Announcement",
    date: "Now Enrolling",
    title: "Early-bird admissions for new entrants",
    desc: "Secure your child's place at Machilipatnam's value-driven CBSE school. Apply early to reserve a seat.",
  },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1581726707445-75cbe4efc586?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
];

export const testimonials = [
  {
    quote:
      "The teachers truly know my daughter — her strengths, her curiosity, and how to bring out her best. It feels like a second home.",
    name: "Lakshmi P.",
    role: "Parent, Class 3",
  },
  {
    quote:
      "A rare blend of strong values and modern facilities. My son looks forward to school every single day.",
    name: "Ravi Teja",
    role: "Parent, Class 5",
  },
  {
    quote:
      "From the STEAM labs to the gardens, every corner is designed for children to wonder and grow. We made the right choice.",
    name: "Sunitha M.",
    role: "Parent, Nursery",
  },
];
