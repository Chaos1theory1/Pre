/**
 * Types representing the models for Tunisian Mycelium Biotech Startup
 */

export type ProductCategory = 'Grain Spawn' | 'Bio-materials' | 'Starting Cultures' | 'Consulting & Setup';
export type ProductStatus = 'Available' | 'Out of Stock' | 'Pre-order';

export interface Product {
  id: string;
  name: string;
  scientificName?: string;
  description: string;
  category: ProductCategory;
  price: string; // e.g. "45 TND / kg"
  status: ProductStatus;
  image: string; // URL or base64 or placeholder
  specifications: string[]; // e.g. ["Grain: Barley", "Inoculation Rate: 10%", "Fruiting Temp: 18-24°C"]
  availableItems?: number;
  productionDate?: string;
  expirationDate?: string;
  certificateUrl?: string; // Optional Google Drive link or other certificate URL
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration?: string;
  image: string;
  benefits: string[];
}

export interface ContactMessage {
  id: string;
  senderName: string;
  senderEmail: string;
  senderPhone?: string;
  subject: string;
  message: string;
  isRead: boolean;
  receivedAt: string; // ISO timestamp
}

export interface LandingHero {
  badge: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface AboutSection {
  title: string;
  subtitle: string;
  story: string;
  mission: string;
  vision: string;
  teamFocus: string;
  missionTitle?: string;
  visionTitle?: string;
  missionIcon?: string;
  visionIcon?: string;
  missionImage?: string;
  visionImage?: string;
  biotechTitle?: string;
  biotechDesc1?: string;
  biotechDesc2?: string;
  biotechPhaseTitle1?: string;
  biotechPhaseDesc1?: string;
  biotechPhaseTitle2?: string;
  biotechPhaseDesc2?: string;
  biotechPhaseTitle3?: string;
  biotechPhaseDesc3?: string;
  frenchLabImage?: string;
  arabicLabImage?: string;
  englishLabImage?: string;
  scienceBadge?: string;
  storyHeading?: string;
  chooseTitle?: string;
  chooseSubtitle?: string;
  choosePhaseTitle1?: string;
  choosePhaseDesc1?: string;
  choosePhaseIcon1?: string;
  choosePhaseTitle2?: string;
  choosePhaseDesc2?: string;
  choosePhaseIcon2?: string;
  choosePhaseTitle3?: string;
  choosePhaseDesc3?: string;
  choosePhaseIcon3?: string;
  choosePhaseTitle4?: string;
  choosePhaseDesc4?: string;
  choosePhaseIcon4?: string;
  featuresTitle?: string;
  featuresSubtitle?: string;
  biotechBadge?: string;
  biotechPhasesTitle?: string;
}

export interface FeatureItem {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export interface ContactDetails {
  email: string;
  phone: string;
  address: string;
  locationMapEmbed: string;
  workingHours: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Certification {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface HeaderContent {
  brandName: string;
  brandSub: string;
  linkHome: string;
  linkAbout: string;
  linkProducts: string;
  linkContact: string;
}

export interface FooterContent {
  description: string;
  copyright: string;
}

export interface SiteContent {
  logoUrl?: string;
  hero: LandingHero;
  about: AboutSection;
  features: FeatureItem[];
  contactDetails: ContactDetails;
  team?: TeamMember[];
  certifications?: Certification[];
  header?: HeaderContent;
  footer?: FooterContent;
}

export interface DatabaseState {
  siteContent: SiteContent;
  products: Product[];
  services: Service[];
  messages: ContactMessage[];
}
