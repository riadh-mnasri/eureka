import { notFound } from "next/navigation";
import { getProfile, PROFILES } from "@/lib/profiles";
import { Dashboard } from "@/components/Dashboard";

export function generateStaticParams() {
  return PROFILES.map((profile) => ({ profileId: profile.id }));
}

export default async function ProfileDashboardPage({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) {
  const { profileId } = await params;
  const profile = getProfile(profileId);
  if (!profile) notFound();

  return <Dashboard profile={profile} />;
}
