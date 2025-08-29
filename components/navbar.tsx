import Image from "next/image";
import { Titillium_Web } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";

const titillium = Titillium_Web({ weight: '600', subsets: ["latin"] });

const languages = [
	{ code: 'en', name: 'English', flag: '🇺🇸' },
	{ code: 'pt', name: 'Português', flag: '🇧🇷' },
	{ code: 'es', name: 'Español', flag: '🇪🇸' },
	{ code: 'fr', name: 'Français', flag: '🇫🇷' },
];

export function Navbar() {

	const currentLanguage = languages[0];

	function handleLanguageChange(languageCode: string) {
		console.log('Language changed to:', languageCode);
	}

	return (
		<nav className="bg-background text-white max-w-6xl mx-auto px-4 pt-6 flex items-center justify-between">
			<div className="flex items-center gap-6">
				<Link href="/">
					<div className="flex items-center gap-2 group cursor-pointer">
						<Image src="/tucupy.svg" alt="logo" width={15} height={15} />
						<h1 className={cn("text-3xl font-bold text-foreground group-hover:text-brand transition-colors ease-out mb-1", titillium.className)}>tucupy</h1>
					</div>
				</Link>
				<ul className="flex items-center gap-1 mt-2">
					<Link href="/" className="text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-accent/10 px-2 py-1.5 rounded-md">
						Services
					</Link>
					<Link href="/about" className="text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-accent/10 px-2 py-1.5 rounded-md">
						Work
					</Link>
					<Link href="/blog" className="text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-accent/10 px-2 py-1.5 rounded-md">
						About
					</Link>
					<Link href="/blog" className="text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-accent/10 px-2 py-1.5 rounded-md">
						Blog
					</Link>
					<Link href="/careers" className="text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-accent/10 px-2 py-1.5 rounded-md">
						Work with us
					</Link>
				</ul>
			</div>
			<div className="flex items-center gap-4">
				<Link href="/blog" className="text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-accent/10 px-2 py-1.5 rounded-md flex items-center gap-2">
					<Image src="/github.svg" alt="github" width={16} height={16} />
					Github
				</Link>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<button className="text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-accent/10 px-2 py-1.5 rounded-md flex items-center gap-2 outline-none">
							<span className="flex items-center gap-1">
								{currentLanguage.name}
							</span>
							<ChevronDownIcon className="w-3 h-3" />
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-48 bg-primary border-gray-400/20">
						{languages.map((language) => (
							<DropdownMenuItem
								key={language.code}
								className="flex items-center gap-2 cursor-pointer focus:bg-gray-400/20"
							>
								<span className="text-base">{language.flag}</span>
								<span className="font-medium text-foreground">{language.name}</span>
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</nav>
	)
}
