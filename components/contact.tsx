'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from './ui/form';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

const formSchema = z.object({
	firstName: z.string().min(1, 'validation.firstNameRequired'),
	lastName: z.string().min(1, 'validation.lastNameRequired'),
	email: z.email().min(1, 'validation.emailRequired'),
	phone: z.string().optional(),
	company: z.string().optional(),
	message: z.string().min(1, 'validation.messageRequired'),
});

type FormData = z.infer<typeof formSchema>;

interface ContactProps {
	dict: Record<string, any>;
}

export function Contact({ dict }: ContactProps): React.ReactElement {
	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			company: '',
			message: '',
		},
	});

	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
	const { isSubmitting } = form.formState;

	async function onSubmit(values: FormData) {
		try {
			console.log(values)
			await new Promise(resolve => setTimeout(resolve, 1500));
			setIsSubmitted(true);
			form.reset();
		} catch (error) {
			console.error('Error submitting form:', error);
		}
	}

	if (isSubmitted) {
		return (
			<div className="bg-background">
				<div className="mx-auto max-w-2xl lg:max-w-6xl px-4">
					<div>
						<h2 className="text-base/7 font-semibold text-muted-foreground">{dict.contact.section}</h2>
						<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-foreground" dangerouslySetInnerHTML={{ __html: dict.contact.title }} />
						<p className="mt-6 text-lg/8 text-muted-foreground max-w-3xl">
							{dict.contact.description}
						</p>
					</div>

					<div className="w-full mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
						<div className="bg-primary rounded-3xl p-12 flex flex-col justify-center">
							<div className="mx-auto w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mb-6">
								<Mail className="w-8 h-8 text-brand" />
							</div>
							<h3 className="text-3xl font-semibold text-foreground mb-4 text-center">
								{dict.contact.success.title}
							</h3>
							<p className="text-lg text-muted-foreground mb-8 text-center">
								{dict.contact.success.description}
							</p>
							<Button
								variant="brand"
								onClick={() => setIsSubmitted(false)}
								className="mx-auto"
							>
								{dict.contact.success.sendAnother}
							</Button>
						</div>
						<div className="bg-primary rounded-3xl p-12 flex items-center justify-center">
							<div className="text-center text-muted-foreground">
								<Mail className="w-12 h-12 mx-auto mb-4 opacity-30" />
								<p>{dict.contact.success.onTheWay}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="bg-background">
			<div className="size-1 opacity-0" id="contact" />
			<div className="mx-auto max-w-2xl lg:max-w-6xl px-4">
				<div>
					<h2 className="text-base/7 font-semibold text-muted-foreground">{dict.contact.section}</h2>
					<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-foreground" dangerouslySetInnerHTML={{ __html: dict.contact.title }} />
					<p className="mt-6 text-lg/8 text-muted-foreground max-w-3xl">
						{dict.contact.description}
					</p>
				</div>

				<div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Contact Info */}
					<div className="rounded-3xl">
						<div className="max-w-lg">
							<h3 className="text-2xl font-semibold text-foreground mb-6">
								{dict.contact.form.getInTouch}
							</h3>
							<p className="text-muted-foreground mb-10 text-lg">
								{dict.contact.form.getInTouchDescription}
							</p>

							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<div className="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center">
										<Mail className="w-5 h-5 text-brand" />
									</div>
									<div>
										<p className="text-foreground font-medium">{dict.contact.info.emailUs}</p>
										<a href="mailto:contato@tucupy.com" className="text-muted-foreground hover:text-brand transition-colors">
											{dict.contact.info.email}
										</a>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center">
										<Phone className="w-5 h-5 text-brand" />
									</div>
									<div>
										<p className="text-foreground font-medium">{dict.contact.info.callUs}</p>
										<a href="tel:+5591991011351" className="text-muted-foreground hover:text-brand transition-colors">
											{dict.contact.info.phone}
										</a>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center">
										<MapPin className="w-5 h-5 text-brand" />
									</div>
									<div>
										<p className="text-foreground font-medium">{dict.contact.info.visitUs}</p>
										<p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: dict.contact.info.address.replace(/\n/g, '<br />') }} />
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className="bg-primary rounded-3xl p-8">
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
									<FormField
										control={form.control}
										name="firstName"
										render={({ field }) => (
											<FormItem>
												<FormLabel>{dict.contact.form.firstName} *</FormLabel>
												<FormControl>
													<Input
														placeholder={dict.contact.form.firstNamePlaceholder}
														className="px-4 py-3 rounded-xl"
														{...field}
													/>
												</FormControl>
												<FormMessage>
													{form.formState.errors.firstName?.message && dict.contact[form.formState.errors.firstName.message]}
												</FormMessage>
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="lastName"
										render={({ field }) => (
											<FormItem>
												<FormLabel>{dict.contact.form.lastName} *</FormLabel>
												<FormControl>
													<Input
														placeholder={dict.contact.form.lastNamePlaceholder}
														className="px-4 py-3 rounded-xl"
														{...field}
													/>
												</FormControl>
												<FormMessage>
													{form.formState.errors.lastName?.message && dict.contact[form.formState.errors.lastName.message]}
												</FormMessage>
											</FormItem>
										)}
									/>
								</div>

								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{dict.contact.form.email} *</FormLabel>
											<FormControl>
												<Input
													type="email"
													placeholder={dict.contact.form.emailPlaceholder}
													className="px-4 py-3 rounded-xl"
													{...field}
												/>
											</FormControl>
											<FormMessage>
												{form.formState.errors.email?.message && dict.contact[form.formState.errors.email.message]}
											</FormMessage>
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="phone"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{dict.contact.form.phone}</FormLabel>
											<FormControl>
												<Input
													type="tel"
													placeholder={dict.contact.form.phonePlaceholder}
													className="px-4 py-3 rounded-xl"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="company"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{dict.contact.form.company}</FormLabel>
											<FormControl>
												<Input
													placeholder={dict.contact.form.companyPlaceholder}
													className="px-4 py-3 rounded-xl"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="message"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{dict.contact.form.message} *</FormLabel>
											<FormControl>
												<Textarea
													rows={5}
													placeholder={dict.contact.form.messagePlaceholder}
													className="px-4 py-3 rounded-xl resize-none"
													{...field}
												/>
											</FormControl>
											<FormMessage>
												{form.formState.errors.message?.message && dict.contact[form.formState.errors.message.message]}
											</FormMessage>
										</FormItem>
									)}
								/>

								<div className="pt-4">
									<Button
										type="submit"
										variant="brand"
										disabled={isSubmitting}
										className="w-full"
									>
										{isSubmitting ? dict.contact.form.sending : dict.contact.form.send}
									</Button>
								</div>
							</form>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
}
