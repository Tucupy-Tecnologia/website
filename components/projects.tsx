import Image from "next/image";
import Link from "next/link";

interface ProjectsProps {
	dict: Record<string, any>;
}

export function Projects({ dict }: ProjectsProps) {
	return (
		<div className="mx-auto max-w-2xl lg:max-w-6xl px-4">
			<div className="size-1 opacity-0" id="projects" />

			<div>
				<h2 className="text-base/7 font-semibold text-muted-foreground">{dict.projects.section}</h2>
				<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty  sm:text-5xl text-foreground" dangerouslySetInnerHTML={{ __html: dict.projects.title }} />
				<p className="mt-6 text-lg/8 text-muted-foreground max-w-3xl">
					{dict.projects.description}
				</p>
			</div>

			<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 pb-16">

				<Link href="https://maratonadaamazonia.com.br/pt" target="_blank" rel="noopener noreferrer" className="block w-full overflow-hidden rounded-2xl bg-primary outline outline-gray-400/20 p-3 space-y-3 transition-all duration-200 ease-out hover:outline-gray-400/40" >
					<Image unoptimized width={400} height={400} src="/maratona.png" alt="Meia Maratona Da Amazônia" className="w-full rounded-lg border border-gray-400/20" />
					<div className="pl-2 space-y-2">
						<h2 className="text-foreground text-xl font-semibold">
							{dict.projects.maratona.title}
						</h2>
						<p className="text-muted-foreground text-pretty pb-1" dangerouslySetInnerHTML={{ __html: dict.projects.maratona.description }} />
					</div>
				</Link>

				<Link href="https://www.fonsecabrasilserrao.com/" target="_blank" rel="noopener noreferrer" className="block w-full overflow-hidden rounded-2xl bg-primary outline outline-gray-400/20 p-3 space-y-3 transition-all duration-200 ease-out hover:outline-gray-400/40" >
					<Image unoptimized width={350} height={350} src="/fonseca-brasil-serrao.png" alt="Pinheiro Diniz" className="w-full rounded-lg border border-gray-400/20" />
					<div className="pl-2 space-y-2">
						<h2 className="text-foreground text-xl font-semibold">
							{dict.projects.fonsecaBrasilSerrao.title}
						</h2>
						<p className="text-muted-foreground text-pretty pb-1" dangerouslySetInnerHTML={{ __html: dict.projects.fonsecaBrasilSerrao.description }} />
					</div>
				</Link>

				<Link href="https://www.globaldiscounting.com/" target="_blank" rel="noopener noreferrer" className="block w-full overflow-hidden rounded-2xl bg-primary outline outline-gray-400/20 p-3 space-y-3 transition-all duration-200 ease-out hover:outline-gray-400/40" >
					<Image unoptimized width={350} height={350} src="/global-discounting.png" alt="Global Discounting" className="w-full rounded-lg border border-gray-400/20" />
					<div className="pl-2 space-y-2">
						<h2 className="text-foreground text-xl font-semibold">
							{dict.projects.globalDiscounting.title}
						</h2>
						<p className="text-muted-foreground text-pretty pb-1" dangerouslySetInnerHTML={{ __html: dict.projects.globalDiscounting.description }} />
					</div>
				</Link>


				<Link href="https://www.portoexclusivo.com/" target="_blank" rel="noopener noreferrer" className="block w-full overflow-hidden rounded-2xl bg-primary outline outline-gray-400/20 p-3 space-y-3 transition-all duration-200 ease-out hover:outline-gray-400/40" >
					<Image unoptimized width={350} height={350} src="/porto-exclusivo.png" alt="Porto Exclusivo" className="w-full rounded-lg border border-gray-400/20" />
					<div className="pl-2 space-y-2">
						<h2 className="text-foreground text-xl font-semibold">
							{dict.projects.portoExclusivo.title}
						</h2>
						<p className="text-muted-foreground text-pretty pb-1" dangerouslySetInnerHTML={{ __html: dict.projects.portoExclusivo.description }} />
					</div>
				</Link>


				<Link href="https://www.biblialivroporlivro.com.br/" target="_blank" rel="noopener noreferrer" className="block w-full overflow-hidden rounded-2xl bg-primary outline outline-gray-400/20 p-3 space-y-3 transition-all duration-200 ease-out hover:outline-gray-400/40" >
					<Image unoptimized width={350} height={350} src="/biblia.png" alt="Bíblia Livro por Livro" className="w-full rounded-lg border border-gray-400/20" />
					<div className="pl-2 space-y-2">
						<h2 className="text-foreground text-xl font-semibold">
							{dict.projects.bibliaLivro.title}
						</h2>
						<p className="text-muted-foreground text-pretty pb-1" dangerouslySetInnerHTML={{ __html: dict.projects.bibliaLivro.description }} />
					</div>
				</Link>

				<Link href="https://www.decktimus.com/" target="_blank" rel="noopener noreferrer" className="block w-full overflow-hidden rounded-2xl bg-primary outline outline-gray-400/20 p-3 space-y-3 transition-all duration-200 ease-out hover:outline-gray-400/40" >
					<Image unoptimized width={350} height={350} src="/decktimus.png" alt="Decktimus" className="w-full rounded-lg border border-gray-400/20" />
					<div className="pl-2 space-y-2">
						<h2 className="text-foreground text-xl font-semibold">
							{dict.projects.decktimus.title}
						</h2>
						<p className="text-muted-foreground text-pretty pb-1" dangerouslySetInnerHTML={{ __html: dict.projects.decktimus.description }} />
					</div>
				</Link>

			</div>
		</div>
	)
}
