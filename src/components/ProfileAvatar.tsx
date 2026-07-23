import type { Profile } from "@/lib/profiles";
import { DragonMascot } from "@/components/DragonMascot";
import { ChessboardIcon } from "@/components/ChessboardIcon";
import { IceQueenMascot } from "@/components/IceQueenMascot";

export function ProfileAvatar({
  profile,
  emojiClassName,
}: {
  profile: Profile;
  emojiClassName?: string;
}) {
  if (profile.avatar.kind === "dragon") {
    return <DragonMascot className="h-full w-full" />;
  }

  if (profile.avatar.kind === "chessboard") {
    return <ChessboardIcon className="h-full w-full" />;
  }

  if (profile.avatar.kind === "ice-queen") {
    return <IceQueenMascot className="h-full w-full" />;
  }

  return <span className={emojiClassName}>{profile.avatar.emoji}</span>;
}
