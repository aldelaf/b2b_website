import type { NavItem } from "./SiteNav";

export const CONTACT_EMAIL = "alvaro@corkfountain.com";

// Cal.com event slugs. Pages without a dedicated event fall back to the
// default diagnostic link baked into openCalModal.
export const CAL_LINK_RECEPCIONISTA =
  "alvaro-de-la-fuente-dp0fx0/demo-recepcionista-ia-15-minutos";
export const CAL_LINK_AUDITORIA =
  "alvaro-de-la-fuente-dp0fx0/auditoria-de-procesos-20-minutos";

export const NAV_ITEMS_ES: NavItem[] = [
  { label: "Amazon", href: "/amazon" },
  { label: "Recepcionista IA", href: "/recepcionista" },
  { label: "Automatización PYMES", href: "/automatizacion" },
  { label: "Casos", href: "/casos" },
];

export const NAV_ITEMS_EN: NavItem[] = [
  { label: "Amazon", href: "/amazon" },
  { label: "AI Receptionist", href: "/recepcionista" },
  { label: "SME Automation", href: "/automatizacion" },
  { label: "Case studies", href: "/casos" },
];
