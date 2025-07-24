import Image from "next/image";

interface Author {
	name: string;
	handle: string;
	imageUrl: string;
}

interface Testimonial {
	body: string;
	author: Author;
}

const testimonials: Testimonial[] = [
	{
		body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
		author: {
			name: 'Leslie Alexander',
			handle: 'lesliealexander',
			imageUrl:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	{
		body: 'Anim sit consequat culpa commodo eu do nisi commodo ut aute aliqua. Laborum esse duis tempor consectetur officia mollit fugiat. Exercitation qui elit minim minim quis fugiat ex.',
		author: {
			name: 'Michael Foster',
			handle: 'michaelfoster',
			imageUrl:
				'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	{
		body: 'Consequatur ut atque. Itaque nostrum molestiae id veniam eos cumque.',
		author: {
			name: 'Dries Vincent',
			handle: 'driesvincent',
			imageUrl:
				'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	{
		body: 'Excepteur consectetur deserunt id incididunt veniam mollit officia sint qui aute duis sit cillum. Reprehenderit fugiat amet aliqua in commodo minim sunt laborum.',
		author: {
			name: 'Lindsay Walton',
			handle: 'lindsaywalton',
			imageUrl:
				'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	{
		body: 'Distinctio facere aliquam est qui atque sint molestias ad. Fuga consequuntur asperiores voluptatum ipsum.',
		author: {
			name: 'Courtney Henry',
			handle: 'courtneyhenry',
			imageUrl:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	{
		body: 'Nam nesciunt dolorem dolor asperiores sint. Incidunt molestiae quis deleniti vitae ut in earum delectus iusto.',
		author: {
			name: 'Tom Cook',
			handle: 'tomcook',
			imageUrl:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	{
		body: 'Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis.',
		author: {
			name: 'Whitney Francis',
			handle: 'whitneyfrancis',
			imageUrl:
				'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	{
		body: 'Aliquid dolore praesentium ratione. Cumque ea officia repellendus laboriosam. Vitae quod id explicabo non sunt.',
		author: {
			name: 'Leonard Krasner',
			handle: 'leonardkrasner',
			imageUrl:
				'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	{
		body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
		author: {
			name: 'Floyd Miles',
			handle: 'floydmiles',
			imageUrl:
				'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
];

export function Testimonials() {
	return (
		<div className="bg-background pb-20">
			<div className="mx-auto max-w-2xl lg:max-w-6xl px-4">
				<div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
					<div>
						<h2 className="text-base/7 font-semibold text-muted-foreground">Testimonials</h2>
						<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-foreground">
							What our clients <span className="text-brand">say about us</span>
						</p>
						<p className="mt-6 text-lg/8 text-muted-foreground max-w-3xl">
							Discover how we turn complex challenges into elegant, user-centered solutions.
						</p>
					</div>

					<div className="sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
						{testimonials.map((testimonial: Testimonial) => (
							<div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
								<figure className="rounded-2xl bg-primary outline outline-gray-400/20 p-8 text-sm/6">
									<blockquote className="text-foreground">
										<p>{`"${testimonial.body}"`}</p>
									</blockquote>
									<figcaption className="mt-6 flex items-center gap-x-4">
										<img
											src={testimonial.author.imageUrl}
											alt={testimonial.author.name}
											width={40}
											height={40}
											className="size-10 rounded-full bg-primary"
										/>
										<div>
											<div className="font-semibold text-foreground">{testimonial.author.name}</div>
											<div className="text-muted-foreground">{`@${testimonial.author.handle}`}</div>
										</div>
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
