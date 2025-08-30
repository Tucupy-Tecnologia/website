import Image from "next/image";
import Link from "next/link";

export function Projects() {
	return (
		<div className="mx-auto max-w-2xl lg:max-w-6xl px-4">
			<div className="size-1 opacity-0" id="projects" />

			<div>
				<h2 className="text-base/7 font-semibold text-muted-foreground">Projects</h2>
				<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty  sm:text-5xl text-foreground">
					Built to <span className="text-brand"> make a difference </span>
				</p>
				<p className="mt-6 text-lg/8 text-muted-foreground max-w-3xl">
					Discover how we turn complex challenges into elegant, user-centered solutions.
				</p>
			</div>

			<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 pb-16">

				<Link href="https://maratonadaamazonia.com.br/pt" target="_blank" rel="noopener noreferrer" className="block w-full overflow-hidden rounded-2xl bg-primary outline outline-gray-400/20 p-3 space-y-3 transition-all duration-200 ease-out hover:outline-gray-400/40" >
					<Image unoptimized width={400} height={400} src="/maratona.png" alt="Meia Maratona Da Amazônia" className="w-full rounded-lg border border-gray-400/20" />
					<div className="pl-2 space-y-2">
						<h2 className="text-foreground text-xl font-semibold">
							Meia Maratona Da Amazônia
						</h2>
						<p className="text-muted-foreground text-pretty pb-1">
							Sustainable half-marathon uniting <span className="text-brand">elite performance</span> with <span className="text-brand">environmental responsibility</span>. Carbon neutral event that plants trees in the Amazon.
						</p>
					</div>
				</Link>

				<Link href="https://www.globaldiscounting.com/" target="_blank" rel="noopener noreferrer" className="block w-full overflow-hidden rounded-2xl bg-primary outline outline-gray-400/20 p-3 space-y-3 transition-all duration-200 ease-out hover:outline-gray-400/40" >
					<Image unoptimized width={350} height={350} src="/global-discounting.png" alt="Global Discounting" className="w-full rounded-lg border border-gray-400/20" />
					<div className="pl-2 space-y-2">
						<h2 className="text-foreground text-xl font-semibold">
							Global Discounting
						</h2>
						<p className="text-muted-foreground text-pretty pb-1">
							Specializing in <span className="text-brand">TV</span>, <span className="text-brand">film</span>, and <span className="text-brand">sports</span> content licensing. Digital financing solutions helping media businesses unlock working capital.
						</p>
					</div>
				</Link>


				<Link href="https://www.portoexclusivo.com/" target="_blank" rel="noopener noreferrer" className="block w-full overflow-hidden rounded-2xl bg-primary outline outline-gray-400/20 p-3 space-y-3 transition-all duration-200 ease-out hover:outline-gray-400/40" >
					<Image unoptimized width={350} height={350} src="/porto-exclusivo.png" alt="Porto Exclusivo" className="w-full rounded-lg border border-gray-400/20" />
					<div className="pl-2 space-y-2">
						<h2 className="text-foreground text-xl font-semibold">
							Porto Exclusivo
						</h2>
						<p className="text-muted-foreground text-pretty pb-1">
							Travel company dedicated to offering unparalleled travel experiences, distinguished by <span className="text-brand">comfort</span>, <span className="text-brand">exclusivity</span> and <span className="text-brand">excellence</span>.
						</p>
					</div>
				</Link>


				<Link href="https://www.biblialivroporlivro.com.br/" target="_blank" rel="noopener noreferrer" className="block w-full overflow-hidden rounded-2xl bg-primary outline outline-gray-400/20 p-3 space-y-3 transition-all duration-200 ease-out hover:outline-gray-400/40" >
					<Image unoptimized width={350} height={350} src="/biblia.png" alt="Bíblia Livro por Livro" className="w-full rounded-lg border border-gray-400/20" />
					<div className="pl-2 space-y-2">
						<h2 className="text-foreground text-xl font-semibold">
							Bíblia Livro por Livro
						</h2>
						<p className="text-muted-foreground text-pretty pb-1">
							Comprehensive Bible study material covering all <span className="text-brand">66 books</span> with <span className="text-brand">12 exclusive study guides</span>. A transformative journey through Scripture.
						</p>
					</div>
				</Link>

				<Link href="https://www.decktimus.com/" target="_blank" rel="noopener noreferrer" className="block w-full overflow-hidden rounded-2xl bg-primary outline outline-gray-400/20 p-3 space-y-3 transition-all duration-200 ease-out hover:outline-gray-400/40" >
					<Image unoptimized width={350} height={350} src="/decktimus.png" alt="Decktimus" className="w-full rounded-lg border border-gray-400/20" />
					<div className="pl-2 space-y-2">
						<h2 className="text-foreground text-xl font-semibold">
							Decktimus
						</h2>
						<p className="text-muted-foreground text-pretty pb-1">
							Comprehensive maritime solutions helping ship owners achieve superior <span className="text-brand">safety</span>, <span className="text-brand">security</span>, and <span className="text-brand">pollution prevention</span> standards.
						</p>
					</div>
				</Link>

				<Link href="https://www.pinheirodiniz.com.br/" target="_blank" rel="noopener noreferrer" className="block w-full overflow-hidden rounded-2xl bg-primary outline outline-gray-400/20 p-3 space-y-3 transition-all duration-200 ease-out hover:outline-gray-400/40" >
					<Image unoptimized width={350} height={350} src="/pinheiro-diniz.png" alt="Pinheiro Diniz" className="w-full rounded-lg border border-gray-400/20" />
					<div className="pl-2 space-y-2">
						<h2 className="text-foreground text-xl font-semibold">
							Pinheiro Diniz
						</h2>
						<p className="text-muted-foreground text-pretty pb-1">
							Social security law specialists ensuring your <span className="text-brand">pension benefits</span> are fully <span className="text-brand">recognized</span> and <span className="text-brand">respected</span>. Expert legal guidance from home.
						</p>
					</div>
				</Link>
			</div>
		</div>
	)
}
