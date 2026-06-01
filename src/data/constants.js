import {
  Building2,
  CalendarDays,
  Globe2,
  Home,
  Laptop,
  Plane,
  Scale,
  Sparkles,
  Users,
} from "lucide-react";

export const SURVEY_URL = "https://typeform.com/backthatfounder-survey";

export const pressurePoints = [
  { title: "Housing & temporary stays", icon: Home },
  { title: "Travel & investor meetings", icon: Plane },
  { title: "Visa & immigration costs", icon: Globe2 },
  { title: "Software subscriptions", icon: Laptop },
  { title: "Legal & compliance", icon: Scale },
  { title: "Conferences & customer access", icon: CalendarDays },
];

export const audiences = [
  {
    title: "Founders",
    body: "For startup founders facing immediate expenses, access gaps, or operational challenges.",
    icon: Sparkles,
  },
  {
    title: "Community Builders",
    body: "For people who want to help recruit, organize, or support founder communities.",
    icon: Users,
  },
  {
    title: "B2B Partners",
    body: "For companies, service providers, accelerators, or sponsors interested in helping founders through perks, services, credits, or direct support.",
    icon: Building2,
  },
];

export const steps = [
  {
    title: "Share what you need",
    body: "Complete a short survey about your current founder challenges and expenses.",
  },
  {
    title: "Help us identify patterns",
    body: "Your response helps us understand which founder needs are most urgent and underserved.",
  },
  {
    title: "Get considered for next steps",
    body: "Strong-fit respondents may be invited for a follow-up conversation, pilot opportunity, partnership, or community role.",
  },
];

export const surveyQuestions = [
  "What expenses are putting the most pressure on you right now?",
  "Which challenge is most urgent?",
  "If BackThatFounder could remove one obstacle in the next 30 days, what should it be?",
  "How would you like to participate?",
];

export const participation = [
  "Test founder / pilot participant",
  "Early community member",
  "Community builder",
  "B2B collaborator",
  "Sponsor or supporter",
  "Service or perk provider",
];
