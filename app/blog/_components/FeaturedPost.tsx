import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import banner from "@/public/hackaton.png"
import Image from "next/image"
import Link from "next/link"


export function FeaturedPost() {
  return (
    <Link href="/blog/tucupy-launch-week-15-hackathon-winner-announcement" className="flex items-center gap-10 hover:bg-neutral-500/5 p-3 rounded-xl ease-out transition-colors cursor-pointer">
      <Image src={banner} alt="hackaton" width={450} height={350} className="rounded-lg border border-gray-400/20" />

      <div className="flex flex-col gap-3 pr-4">
        <span className="text-sm text-neutral-500">
          20 Aug 2025 • 4 minute read
        </span>

        <h1 className="text-3xl font-semibold">
          Tucupy Launch Week 15 Hackathon Winner Announcement
        </h1>

        <p className="text-lg text-neutral-400">
          Announcing the winners of the Tucupy Launch Week 15 Hackathon.
        </p>

        <div className="flex items-center gap-3">
          <Avatar className="size-6">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <h2 className="text-sm">
            Shadcn
          </h2>
        </div>

      </div>
    </Link>
  )
}
