import { notFound } from "next/navigation";
import { getProfile, PROFILES } from "@/lib/profiles";
import { ChallengeFlow } from "@/components/ChallengeFlow";

export function generateStaticParams() {
  return PROFILES.map((profile) => ({ profileId: profile.id }));
}

export default async function DailyChallengePage({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) {
  const { profileId } = await params;
  const profile = getProfile(profileId);
  if (!profile) notFound();

  return <ChallengeFlow profile={profile} />;
}
