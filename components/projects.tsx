import Image from "next/image";

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

			<div className="w-full grid grid-cols-2 gap-8 mt-12 pb-16">
				<div className="w-full overflow-hidden rounded-2xl bg-primary outline outline-gray-400/20 p-3 space-y-3" >
					<img src="/porto-exclusivo.png" alt="gel" className="w-full rounded-lg border border-gray-400/20" />
					<div className="pl-2 space-y-2">
						<h2 className="text-foreground text-xl font-semibold">
							Porto Exclusivo
						</h2>
						<p className="text-muted-foreground text-pretty pb-1">
							Travel company dedicated to offering unparalleled travel experiences, distinguished by <span className="text-brand">comfort</span>, <span className="text-brand">exclusivity</span> and <span className="text-brand">excellence</span>.
						</p>
					</div>
				</div>
				<div className="w-full overflow-hidden rounded-2xl bg-primary outline outline-gray-400/20 p-3 space-y-3" >
					<img src="/porto-exclusivo.png" alt="gel" className="w-full rounded-lg border border-gray-400/20" />
					<div className="pl-2 space-y-2">
						<h2 className="text-foreground text-xl font-semibold">
							Porto Exclusivo
						</h2>
						<p className="text-muted-foreground text-pretty pb-1">
							Travel company dedicated to offering unparalleled travel experiences, distinguished by <span className="text-brand">comfort</span>, <span className="text-brand">exclusivity</span> and <span className="text-brand">excellence</span>.
						</p>
					</div>
				</div>
			</div>

		</div>
	)
}
