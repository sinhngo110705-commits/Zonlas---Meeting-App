export type StageMode = "dialogue" | "panel" | "keynote" | "networking";

export type BackgroundTheme = "cyber-tech" | "golden-gala" | "studio-dark" | "red-carpet";

export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  isHost?: boolean;
  isSpeaking?: boolean;
  isMuted?: boolean;
  hasVideo?: boolean;
}

export interface SlideContent {
  id: number;
  title: string;
  subtitle: string;
  bulletPoints: string[];
  graphicType: "chart" | "quote" | "metrics" | "architecture";
}

export interface ChatMessage {
  id: string;
  sender: string;
  role: "host" | "speaker" | "attendee";
  avatar: string;
  text: string;
  timestamp: string;
  isHighlighted?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  priceMonthly: number;
  priceYearly: number;
  popular?: boolean;
  features: string[];
  limits: {
    participants: string;
    speakers: string;
    recordingStorage: string;
    resolution: string;
  };
}

export interface DemoRequest {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  expectedAttendees: string;
  notes?: string;
}
