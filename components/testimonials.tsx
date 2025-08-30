
interface Author {
	name: string;
	role: string;
}

interface Testimonial {
	body: string;
	author: Author;
}

const testimonials: Testimonial[] = [
	{
		body: 'Tucupy transformed our outdated e-commerce platform into a modern, scalable solution in just 8 weeks. The performance improvements alone increased our conversion rate by 35%.',
		author: {
			name: 'Carlos M.',
			role: 'CTO',
		},
	},
	{
		body: 'Their team\'s expertise in cloud architecture saved us thousands in monthly infrastructure costs while improving our system reliability. We now have 99.9% uptime.',
		author: {
			name: 'Ana S.',
			role: 'Head of Engineering',
		},
	},
	{
		body: 'The API integration was flawless. They delivered a complex multi-vendor marketplace ahead of schedule with zero critical bugs at launch.',
		author: {
			name: 'Roberto A.',
			role: 'Product Manager',
		},
	},
	{
		body: 'Working with Tucupy felt like having an extended tech team. They understood our business needs and translated them perfectly into technical solutions.',
		author: {
			name: 'Juliana C.',
			role: 'CEO',
		},
	},
	{
		body: 'They rebuilt our entire mobile app from scratch using React Native. The result? A single codebase that works perfectly on both iOS and Android, cutting our maintenance costs by 60%.',
		author: {
			name: 'Pedro S.',
			role: 'Mobile Team Lead',
		},
	},
	{
		body: 'The team\'s proactive approach to security helped us pass our SOC 2 audit on the first attempt. They think about problems before they become problems.',
		author: {
			name: 'Marina O.',
			role: 'CISO',
		},
	},
	{
		body: 'Our platform now handles 10x the traffic with the same infrastructure. The optimization work they did was incredible - response times improved by 70%.',
		author: {
			name: 'Lucas F.',
			role: 'Technical Director',
		},
	},
	{
		body: 'Tucupy didn\'t just build what we asked for - they challenged our assumptions and delivered something better. Our users love the new interface.',
		author: {
			name: 'Beatriz L.',
			role: 'Head of Product',
		},
	},
	{
		body: 'From MVP to Series A, they\'ve been our technical partners. They scale with us, adapting quickly to our changing needs without missing a beat.',
		author: {
			name: 'Thiago R.',
			role: 'Founder & CEO',
		},
	},
];

export function Testimonials() {
	return (
		<div className="bg-background">
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
						{testimonials.map((testimonial: Testimonial, index: number) => (
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
