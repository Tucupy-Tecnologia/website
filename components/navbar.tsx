'use client';

import Image from "next/image";
import { Titillium_Web } from "next/font/google";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/scroll";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon, Menu, X } from "lucide-react";

const titillium = Titillium_Web({ weight: '600', subsets: ["latin"] });

const languages = [
	{ code: 'en', name: 'English', flag: '🇺🇸' },
	{ code: 'pt', name: 'Português', flag: '🇧🇷' },
	{ code: 'es', name: 'Español', flag: '🇪🇸' },
	{ code: 'fr', name: 'Français', flag: '🇫🇷' },
];

interface NavbarProps {
	lang: string;
	dict: Record<string, any>;
}

export function Navbar({ lang, dict }: NavbarProps) {
	const pathname = usePathname();
	const router = useRouter();
	const currentLanguage = languages.find(l => l.code === lang) || languages[0];
	const [isMenuOpen, setIsMenuOpen] = useState(false);


	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
		e.preventDefault();
		setIsMenuOpen(false);
		if (pathname === `/${lang}`) {
			scrollToSection(sectionId);
		} else {
			router.push(`/${lang}#${sectionId}`);
		}
	};

	const handleLanguageChange = (newLang: string) => {
		setIsMenuOpen(false);
		const currentPath = pathname.replace(/^\/[a-z]{2}/, '') || '/';
		router.push(`/${newLang}${currentPath}`);
	};

	return (
		<nav className="bg-background text-white max-w-6xl mx-auto px-4 pt-6 flex items-center justify-between relative">
			<div className="flex items-center gap-6">
				<Link href={`/${lang}`} onClick={() => setIsMenuOpen(false)}>
					<div className={cn("flex items-center gap-2 group cursor-pointer", isMenuOpen && 'pb-4')}>
						<Image src="/tucupy.svg" alt="logo" width={15} height={15} />
						<h1 className={cn("text-3xl font-bold text-foreground group-hover:text-brand transition-colors ease-out mb-1", titillium.className)}>tucupy</h1>
					</div>
				</Link>
				<ul className="hidden lg:flex items-center gap-1 mt-2">
					<Link
						href={`/${lang}#services`}
						onClick={(e) => handleNavClick(e, 'services')}
						className="text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-accent/10 px-2 py-1.5 rounded-md cursor-pointer"
					>
						{dict.nav.services}
					</Link>
					<Link
						href={`/${lang}#projects`}
						onClick={(e) => handleNavClick(e, 'projects')}
						className="text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-accent/10 px-2 py-1.5 rounded-md cursor-pointer"
					>
						{dict.nav.work}
					</Link>
					<Link href={`/${lang}/about`} className="text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-accent/10 px-2 py-1.5 rounded-md">
						{dict.nav.about}
					</Link>
					<Link href={`/${lang}/blog`} className="text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-accent/10 px-2 py-1.5 rounded-md">
						{dict.nav.blog}
					</Link>
					<Link href={`/${lang}/careers`} className="text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-accent/10 px-2 py-1.5 rounded-md">
						{dict.nav.careers}
					</Link>
				</ul>
			</div>
			<div className="hidden lg:flex items-center gap-4">
				<Link href="https://github.com/Tucupy-Tecnologia/website" target="_blank" className="text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-accent/10 px-2 py-1.5 rounded-md flex items-center gap-2">
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
								onClick={() => handleLanguageChange(language.code)}
								className="flex items-center gap-2 cursor-pointer focus:bg-gray-400/20"
							>
								<span className="text-base">{language.flag}</span>
								<span className="font-medium text-foreground">{language.name}</span>
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

			{/* Mobile menu button */}
			<button
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
				aria-label="Toggle menu"
			>
				{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
			</button>

			{/* Mobile menu */}
			{isMenuOpen && (
				<div className="absolute top-full left-0 right-0 bg-background border-t border-gray-400/20 lg:hidden z-50">
					<div className="px-4 py-4 space-y-2">
						<Link
							href={`/${lang}#services`}
							onClick={(e) => handleNavClick(e, 'services')}
							className="block text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-accent/10 px-3 py-2 rounded-md"
						>
							{dict.nav.services}
						</Link>
						<Link
							href={`/${lang}#projects`}
							onClick={(e) => handleNavClick(e, 'projects')}
							className="block text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-accent/10 px-3 py-2 rounded-md"
						>
							{dict.nav.work}
						</Link>
						<Link
							href={`/${lang}/about`}
							onClick={() => setIsMenuOpen(false)}
							className="block text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-accent/10 px-3 py-2 rounded-md"
						>
							{dict.nav.about}
						</Link>
						<Link
							href={`/${lang}/blog`}
							onClick={() => setIsMenuOpen(false)}
							className="block text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-accent/10 px-3 py-2 rounded-md"
						>
							{dict.nav.blog}
						</Link>
						<Link
							href={`/${lang}/careers`}
							onClick={() => setIsMenuOpen(false)}
							className="block text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-accent/10 px-3 py-2 rounded-md"
						>
							{dict.nav.careers}
						</Link>
						<div className="border-t border-gray-400/20 mt-4 pt-4 space-y-2">
							<Link
								href="https://github.com/Tucupy-Tecnologia/website"
								target="_blank"
								onClick={() => setIsMenuOpen(false)}
								className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-accent/10 px-3 py-2 rounded-md"
							>
								<Image src="/github.svg" alt="github" width={16} height={16} />
								Github
							</Link>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<button className="w-full text-left text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-accent/10 px-3 py-2 rounded-md flex items-center justify-between outline-none">
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
											onClick={() => handleLanguageChange(language.code)}
											className="flex items-center gap-2 cursor-pointer focus:bg-gray-400/20"
										>
											<span className="text-base">{language.flag}</span>
											<span className="font-medium text-foreground">{language.name}</span>
										</DropdownMenuItem>
									))}
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</div>
				</div>
			)}
		</nav>
	)
}
