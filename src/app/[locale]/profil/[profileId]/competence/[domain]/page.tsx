import { notFound } from "next/navigation";
import { getProfile, PROFILES } from "@/lib/profiles";
import { DOMAINS, type Domain } from "@/lib/domains";
import { ChallengeFlow } from "@/components/ChallengeFlow";

export function generateStaticParams() {
  return PROFILES.flatMap((profile) =>
    DOMAINS.map((domain) => ({ profileId: profile.id, domain: domain.id }))
  );
}

function isDomain(value: string): value is Domain {
  return DOMAINS.some((domain) => domain.id === value);
}

export default async function SkillTrackPage({
  params,
}: {
  params: Promise<{ profileId: string; domain: string }>;
}) {
  const { profileId, domain } = await params;
  const profile = getProfile(profileId);
  if (!profile || !isDomain(domain)) notFound();

  return <ChallengeFlow profile={profile} domain={domain} />;
}
