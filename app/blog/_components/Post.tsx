import banner from "@/public/hackaton.png"
import Image from "next/image";
import Link from "next/link";

export function Post() {
  return (
    <Link href="/blog/tucupy-launch-week-15-hackathon-winner-announcement" className="flex flex-col items-center gap-4 hover:bg-neutral-500/5 p-3 rounded-xl ease-out transition-colors cursor-pointer">
      <Image src={banner} alt="hackaton" width={450} height={350} className="rounded-lg border border-gray-400/20" />

      <div className="flex flex-col gap-3 pr-4">
        <span className="text-xs text-neutral-500">
          20 Aug 2025 • 4 minute read
        </span>

        <h1 className="font-semibold">
          Tucupy Launch Week 15 Hackathon Winner Announcement
        </h1>

        <p className="text-sm text-neutral-400">
          Announcing the winners of the Tucupy Launch Week 15 Hackathon.
        </p>
      </div>
    </Link>
  )
}
