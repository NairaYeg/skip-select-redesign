export interface WizardStep {
  id: number;
  name: string;
  icon: string;
}

export const WIZARD_STEPS: readonly WizardStep[] = [
  { id: 1, name: "Postcode", icon: "📍" },
  { id: 2, name: "Waste Type", icon: "🗑️" },
  { id: 3, name: "Select Skip", icon: "⛟" },
  { id: 4, name: "Permit Check", icon: "🛡️" },
  { id: 5, name: "Choose Date", icon: "🗓️" },
  { id: 6, name: "Payment", icon: "💳" },
] as const;

export type WizardStepName = (typeof WIZARD_STEPS)[number]["name"];
