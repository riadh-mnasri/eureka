export type Tier = "eclaireur" | "chercheur" | "champion";

export type Profile = {
  id: string;
  name: string;
  age: number;
  tier: Tier;
  emoji: string;
  color: {
    from: string;
    to: string;
    solid: string;
    dark: string;
  };
};

export const PROFILES: Profile[] = [
  {
    id: "syma",
    name: "Syma",
    age: 6,
    tier: "eclaireur",
    emoji: "🐣",
    color: { from: "#FFD34D", to: "#FFC107", solid: "#FFB300", dark: "#E0980A" },
  },
  {
    id: "sany",
    name: "Sany",
    age: 8,
    tier: "chercheur",
    emoji: "🦊",
    color: { from: "#FF8A65", to: "#FF6B4A", solid: "#FF5A3C", dark: "#E0431F" },
  },
  {
    id: "seji",
    name: "Seji",
    age: 11,
    tier: "champion",
    emoji: "🦉",
    color: { from: "#4DD8C7", to: "#00C2A8", solid: "#00B39C", dark: "#00947F" },
  },
];

export function getProfile(id: string | null | undefined): Profile | undefined {
  return PROFILES.find((profile) => profile.id === id);
}
