
interface Author {
	name: string;
	role: string;
}

interface Testimonial {
	body: string;
	author: Author;
}


interface TestimonialsProps {
	dict: Record<string, any>;
}

export function Testimonials({ dict }: TestimonialsProps) {
	return (
		<div className="bg-background">
			<div className="mx-auto max-w-2xl lg:max-w-6xl px-4">
				<div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
					<div>
						<h2 className="text-base/7 font-semibold text-muted-foreground">{dict.testimonials.section}</h2>
						<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-foreground">
							{dict.testimonials.title}
						</p>
						<p className="mt-6 text-lg/8 text-muted-foreground max-w-3xl">
							{dict.testimonials.description}
						</p>
					</div>

					<div className="sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
						{dict.testimonials.items.map((testimonial: Testimonial, index: number) => (
							<div key={index} className="pt-8 sm:inline-block sm:w-full sm:px-4">
								<figure className="rounded-2xl bg-primary outline outline-gray-400/20 p-8 text-sm/6">
									<blockquote className="text-foreground">
										<p>{`"${testimonial.body}"`}</p>
									</blockquote>
									<figcaption className="mt-6">
										<div className="font-semibold text-foreground">{testimonial.author.name}</div>
										<div className="text-muted-foreground">{testimonial.author.role}</div>
									</figcaption>
								</figure>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
