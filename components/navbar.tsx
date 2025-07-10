import Image from "next/image";

import { Titillium_Web } from "next/font/google";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";
import { Button } from "./ui/button";

const titillium = Titillium_Web({ weight: '600', subsets: ["latin"] });

export default function Navbar() {
	return (
		<nav className="bg-background text-white max-w-6xl mx-auto px-4 pt-6 flex items-center justify-between">
			<div className="flex items-center gap-6">
				<div className="flex items-center gap-3 group cursor-pointer">
					<Image src="/tucupy.svg" alt="logo" width={15} height={14} />
					<h1 className={cn("text-2xl font-bold text-foreground group-hover:text-brand transition-colors ease-out", titillium.style)}>Tucupy</h1>
				</div>

				<ul className="flex items-center gap-1 mt-2">
					<Link href="/" className="text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-accent/10 px-2 py-1.5 rounded-md">
						Home
					</Link>
					<Link href="/about" className="text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-accent/10 px-2 py-1.5 rounded-md">
						About
					</Link>
					<Link href="/blog" className="text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-accent/10 px-2 py-1.5 rounded-md">
						Blog
					</Link>
					<Link href="/blog" className="text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-accent/10 px-2 py-1.5 rounded-md">
						Work with us
					</Link>
				</ul>
			</div>



			<ModeToggle />
		</nav>
	)
}
