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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from './ui/select';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const formSchema = z.object({
	firstName: z
		.string()
		.min(3, "Seu primeiro nome deve ter no mínimo 3 caracteres")
		.max(50, "Seu primeiro nome deve ter no máximo 50 caracteres"),
	lastName: z
		.string()
		.min(3, "Seu sobrenome deve ter no mínimo 3 caracteres")
		.max(50, "Seu sobrenome deve ter no máximo 50 caracteres"),
	email: z
		.string()
		.optional()
		.refine((value) => {
			if (!value) return true;
			return value.includes("@");
		}, "Por favor, insira um email válido"),
	phone: z
		.string()
		.min(10, "Por favor, insira um telefone válido")
		.max(16, "Por favor, insira um telefone válido")
		.regex(/^\+?[0-9]+$/, "Por favor, insira um telefone válido"),
	whereDoYouKnowUs: z
		.enum(["Google", "Facebook", "Instagram", "LinkedIn", "Twitter", "Recomendações", "Outros"])
		.refine((value) => value !== undefined, "Por favor, selecione uma opção"),
	message: z
		.string()
		.min(10, "Sua mensagem deve ter no mínimo 10 caracteres")
		.max(500, "Sua mensagem deve ter no máximo 500 caracteres"),
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
			whereDoYouKnowUs: undefined,
			message: '',
		},
	});

	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
	const { isSubmitting } = form.formState;

	const LOCAL_STORAGE_FORM_SUBMISSION_TIME_KEY = "tucupy@1.0.0:form-submission-time";

	async function onSubmit(values: FormData) {
		const localStorageTime = localStorage.getItem(LOCAL_STORAGE_FORM_SUBMISSION_TIME_KEY);

		if (localStorageTime) {
			const lastTime = localStorageTime;
			const now = Date.now();
			const diff = now - parseInt(lastTime.split(" ")[1]);
			if (diff < 1000 * 60 * 5) {
				toast.error("Aguarde 5 minutos antes de enviar outro formulário", {
					closeButton: true,
				});
				return;
			}
		}

		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/notification`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					...values,
					email: values.email === "" ? null : values.email?.toLowerCase(),
				}),
			});

			if (!response.ok) {
				throw new Error('Failed to submit form');
			}

			localStorage.setItem(LOCAL_STORAGE_FORM_SUBMISSION_TIME_KEY, "now " + Date.now());
			setIsSubmitted(true);
			form.reset();
		} catch (error) {
			toast.error("Erro ao enviar formulário. Tente novamente.", {
				closeButton: true,
				action: {
					label: "Enviar novamente",
					onClick: () => onSubmit(values),
				},
			});
			console.error(error);
		}
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
						{isSubmitted ? (
							<div className="flex flex-col items-center justify-center py-12">
								<div className="mx-auto w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mb-6">
									<Mail className="w-8 h-8 text-brand" />
								</div>
								<h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
									{dict.contact.success.title}
								</h3>
								<p className="text-muted-foreground mb-8 text-center">
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
						) : (
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
												<FormLabel>{dict.contact.form.phone} <span className="text-brand-yellow">*</span></FormLabel>
												<FormControl>
													<Input
														type="tel"
														placeholder="(00) 00000-0000"
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
										name="whereDoYouKnowUs"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Como nos conheceu? <span className="text-brand-yellow">*</span></FormLabel>
												<Select
													onValueChange={field.onChange}
													defaultValue={field.value}
												>
													<FormControl>
														<SelectTrigger className="px-4 py-3 rounded-xl">
															<SelectValue placeholder="Selecione uma opção" />
														</SelectTrigger>
													</FormControl>
													<SelectContent>
														<SelectItem value="Google">Google</SelectItem>
														<SelectItem value="Instagram">Instagram</SelectItem>
														<SelectItem value="Facebook">Facebook</SelectItem>
														<SelectItem value="Twitter">Twitter</SelectItem>
														<SelectItem value="Recomendações">Recomendações</SelectItem>
														<SelectItem value="Outros">Outros</SelectItem>
													</SelectContent>
												</Select>
												<FormMessage />
											</FormItem>
										)}
									/>


									<FormField
										control={form.control}
										name="message"
										render={({ field }) => (
											<FormItem>
												<FormLabel>{dict.contact.form.message} <span className="text-brand-yellow">*</span></FormLabel>
												<FormControl>
													<Textarea
														rows={4}
														placeholder={dict.contact.form.messagePlaceholder}
														className="px-4 py-3 rounded-xl resize-none"
														{...field}
													/>
												</FormControl>
												<FormMessage />
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
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
