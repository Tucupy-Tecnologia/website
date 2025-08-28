import Image from "next/image";
import { Titillium_Web } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const titillium = Titillium_Web({ weight: '600', subsets: ["latin"] });

interface FooterLink {
	label: string;
	href: string;
}

interface FooterSection {
	title: string;
	links: FooterLink[];
}

const footerSections: FooterSection[] = [
	{
		title: "Services",
		links: [
			{ label: "Web Development", href: "/services/web-development" },
			{ label: "Mobile Apps", href: "/services/mobile-apps" },
			{ label: "API Development", href: "/services/api-development" },
			{ label: "DevOps & Hosting", href: "/services/devops" },
		]
	},
	{
		title: "Company",
		links: [
			{ label: "About Us", href: "/about" },
			{ label: "Our Work", href: "/work" },
			{ label: "Blog", href: "/blog" },
			{ label: "Careers", href: "/careers" },
		]
	},
	{
		title: "Resources",
		links: [
			{ label: "Documentation", href: "/docs" },
			{ label: "Case Studies", href: "/case-studies" },
			{ label: "Open Source", href: "/open-source" },
			{ label: "Support", href: "/support" },
		]
	}
];

export function Footer(): React.ReactElement {
	return (
		<footer className="bg-background border-gray-400/20 mt-40">
			<div className="mx-auto max-w-2xl lg:max-w-6xl px-4 py-16">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
					{/* Company Info */}
					<div className="lg:col-span-5">
						<div className="flex items-center gap-2 group cursor-pointer mb-6">
							<Image src="/tucupy.svg" alt="logo" width={12} height={12} />
							<h2 className={cn("text-3xl mb-1 font-bold text-foreground group-hover:text-brand transition-colors ease-out", titillium.className)}>
								tucupy
							</h2>
						</div>

						{/* Contact Info */}
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
									<MapPin className="w-4 h-4 text-brand" />
								</div>
								<div>
									<p className="text-foreground text-sm font-medium">123 Tech Street</p>
									<p className="text-muted-foreground text-sm">San Francisco, CA 94105</p>
								</div>
							</div>

							<div className="flex items-center gap-3">
								<div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
									<Mail className="w-4 h-4 text-brand" />
								</div>
								<div>
									<a
										href="mailto:hello@tucupy.com"
										className="text-foreground text-sm font-medium hover:text-brand transition-colors"
									>
										hello@tucupy.com
									</a>
								</div>
							</div>

							<div className="flex items-center gap-3">
								<div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
									<Phone className="w-4 h-4 text-brand" />
								</div>
								<div>
									<a
										href="tel:+5591991011351"
										className="text-foreground text-sm font-medium hover:text-brand transition-colors"
									>
										+55 (91) 99101-1351
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Footer Links */}
					<div className="lg:col-span-7">
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
							{footerSections.map((section: FooterSection) => (
								<div key={section.title}>
									<h3 className="text-foreground font-semibold mb-4">
										{section.title}
									</h3>
									<ul className="space-y-3">
										{section.links.map((link: FooterLink) => (
											<li key={link.label}>
												<Link
													href={link.href}
													className="text-muted-foreground text-sm hover:text-brand transition-colors"
												>
													{link.label}
												</Link>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="mt-16 pt-8 border-t border-gray-400/20">
					<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
						<div className="flex items-center gap-6">
							<p className="text-muted-foreground text-sm">
								© 2025 Tucupy. All rights reserved.
							</p>
						</div>

						<div className="flex items-center gap-6">

							<Link
								href="https://github.com/Tucupy-Tecnologia"

							>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path fill="#EBEBEB" d="M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z" /></svg>
							</Link>

							<Link
								href="https://www.linkedin.com/company/tucupy/about/"
							>
								<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#EBEBEB" /></svg>

							</Link>

							<Link
								href="https://github.com/tucupy"
								className="text-muted-foreground hover:text-brand transition-colors"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image src="/github.svg" alt="Github" width={20} height={20} />
							</Link>


						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
