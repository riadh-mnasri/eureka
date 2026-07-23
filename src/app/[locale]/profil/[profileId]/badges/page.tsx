import { notFound } from "next/navigation";
import { getProfile, PROFILES } from "@/lib/profiles";
import { BadgesGrid } from "@/components/BadgesGrid";

export function generateStaticParams() {
  return PROFILES.map((profile) => ({ profileId: profile.id }));
}

export default async function BadgesPage({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) {
  const { profileId } = await params;
  const profile = getProfile(profileId);
  if (!profile) notFound();

  return <BadgesGrid profile={profile} />;
}
