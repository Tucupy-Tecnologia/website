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
import { Mail, Rocket, Users, Target, Upload } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useUploadThing } from './uploadthing';
import { notionService } from '@/lib/notion';

const formSchema = z.object({
	name: z
		.string()
		.min(1, 'validation.nameRequired')
		.min(3, 'validation.nameMin'),
	email: z
		.string()
		.min(1, 'validation.emailRequired')
		.email('validation.emailInvalid'),
	phone: z.string().optional(),
	linkedin: z.union([
		z.literal(''),
		z.string().url('validation.linkedinInvalid'),
	]).optional(),
	portfolio: z.union([
		z.literal(''),
		z.string().url('validation.portfolioInvalid'),
	]).optional(),
	cv: z.string().min(1, 'validation.cvRequired'),
	whereDoYouKnowUs: z.enum([
		'Google',
		'Facebook',
		'Instagram',
		'LinkedIn',
		'Twitter',
		'Recomendações',
		'Outros',
	] as const, {
		message: 'validation.whereDoYouKnowUsRequired',
	}),
	areaOfInterest: z.enum([
		'Front-End',
		'Back-End',
		'Full Stack',
		'UI/UX',
		'Ciência de Dados',
		'AI/ML',
		'Business Intelligence',
		'DevOps',
	] as const, {
		message: 'validation.areaOfInterestRequired',
	}),
	message: z
		.string()
		.min(1, 'validation.messageRequired')
		.min(10, 'validation.messageMin'),
});

type FormData = z.infer<typeof formSchema>;

interface CareersFormProps {
	dict: Record<string, any>;
}

export function CareersForm({ dict }: CareersFormProps): React.ReactElement {
	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			linkedin: '',
			portfolio: '',
			cv: '',
			whereDoYouKnowUs: undefined,
			message: '',
		},
	});

	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
	const [isUploading, setIsUploading] = useState<boolean>(false);
	const { isSubmitting } = form.formState;

	const { startUpload } = useUploadThing('cvUploader', {
		onClientUploadComplete: (res) => {
			form.setValue('cv', res[0].url);
			setIsUploading(false);
		},
		onUploadError: (error: Error) => {
			toast.error(`Upload error: ${error.message}`);
			setIsUploading(false);
		},
	});

	const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setIsUploading(true);
			await startUpload([file]);
		}
	};



	async function onSubmit(values: FormData) {
		try {
			// Submit to Notion
			await notionService({
				name: values.name,
				email: values.email || '',
				address: 'Not specified',
				birthDate: new Date().toISOString().split('T')[0],
				whereDoYouKnowUs: values.whereDoYouKnowUs,
				areaOfInterest: values.areaOfInterest,
				linkedin: values.linkedin || '',
				github: values.portfolio || '',
				cv: values.cv,
				message: values.message,
			});

			setIsSubmitted(true);
			form.reset();
		} catch (error) {
			console.error('Error submitting form:', error);
			toast.error(dict.careers.applicationForm.error.description);
		}
	}

	if (isSubmitted) {
		return (
			<div id="application-form" className="mt-20 sm:mt-32 scroll-mt-20 mb-20">
				<div className="mb-10">
					<h2 className="text-2xl sm:text-3xl font-semibold text-foreground">{dict.careers.applicationForm.title}</h2>
					<p className="mt-2 text-base sm:text-lg text-muted-foreground">
						{dict.careers.applicationForm.description}
					</p>
				</div>

				<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="bg-primary rounded-3xl p-12 flex flex-col justify-center">
						<div className="mx-auto w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mb-6">
							<Mail className="w-8 h-8 text-brand" />
						</div>
						<h3 className="text-3xl font-semibold text-foreground mb-4 text-center">
							{dict.careers.applicationForm.success.title}
						</h3>
						<p className="text-lg text-muted-foreground mb-8 text-center">
							{dict.careers.applicationForm.success.description}
						</p>
						<Button
							variant="brand"
							onClick={() => setIsSubmitted(false)}
							className="mx-auto"
						>
							{dict.careers.applicationForm.success.sendAnother}
						</Button>
					</div>
					<div className="bg-primary rounded-3xl p-12 flex items-center justify-center">
						<div className="text-center text-muted-foreground">
							<Rocket className="w-12 h-12 mx-auto mb-4 opacity-30" />
							<p>{dict.careers.applicationForm.success.description}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div id="application-form" className="mt-20 sm:mt-32 scroll-mt-20 mb-20">
			<div className="mb-10">
				<h2 className="text-2xl sm:text-3xl font-semibold text-foreground">{dict.careers.applicationForm.title}</h2>
				<p className="mt-2 text-base sm:text-lg text-muted-foreground">
					{dict.careers.applicationForm.description}
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{/* Left Column - Info */}
				<div className="rounded-3xl">
					<div className="max-w-lg">
						<p className="text-muted-foreground mb-10 text-lg">
							{dict.careers.applicationForm.form.getInTouchDescription || 'We\'re looking for talented individuals to join our mission. Share your story with us.'}
						</p>

						<div className="space-y-6">
							<div className="flex items-start gap-4">
								<div className="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center">
									<Rocket className="w-5 h-5 text-brand" />
								</div>
								<div>
									<p className="text-foreground font-medium">{dict.careers.applicationForm.form.fastPaced}</p>
									<p className="text-muted-foreground">{dict.careers.applicationForm.form.fastPacedDesc}</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center">
									<Users className="w-5 h-5 text-brand" />
								</div>
								<div>
									<p className="text-foreground font-medium">{dict.careers.applicationForm.form.collaborative}</p>
									<p className="text-muted-foreground">{dict.careers.applicationForm.form.collaborativeDesc}</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center">
									<Target className="w-5 h-5 text-brand" />
								</div>
								<div>
									<p className="text-foreground font-medium">{dict.careers.applicationForm.form.growth}</p>
									<p className="text-muted-foreground">{dict.careers.applicationForm.form.growthDesc}</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Right Column - Form */}
				<div className="bg-primary rounded-3xl p-8">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem className="sm:col-span-2">
											<FormLabel>{dict.careers.applicationForm.form.name} *</FormLabel>
											<FormControl>
												<Input
													placeholder={dict.careers.applicationForm.form.namePlaceholder}
													className="px-4 py-3 rounded-xl"
													{...field}
												/>
											</FormControl>
											<FormMessage>
												{form.formState.errors.name?.message && dict.careers.applicationForm.validation[form.formState.errors.name.message]}
											</FormMessage>
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{dict.careers.applicationForm.form.email} *</FormLabel>
											<FormControl>
												<Input
													type="email"
													placeholder={dict.careers.applicationForm.form.emailPlaceholder}
													className="px-4 py-3 rounded-xl"
													{...field}
												/>
											</FormControl>
											<FormMessage>
												{form.formState.errors.email?.message && dict.careers.applicationForm.validation[form.formState.errors.email.message]}
											</FormMessage>
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="phone"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{dict.careers.applicationForm.form.phone}</FormLabel>
											<FormControl>
												<Input
													type="tel"
													placeholder={dict.careers.applicationForm.form.phonePlaceholder}
													className="px-4 py-3 rounded-xl"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<FormField
								control={form.control}
								name="whereDoYouKnowUs"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{dict.careers.applicationForm.form.whereDoYouKnowUs || 'Where did you hear about us?'} *</FormLabel>
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<FormControl>
												<SelectTrigger className="px-4 py-3 rounded-xl w-full">
													<SelectValue placeholder={dict.careers.applicationForm.form.whereDoYouKnowUsPlaceholder || 'Select an option'} />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="Google">Google</SelectItem>
												<SelectItem value="Facebook">Facebook</SelectItem>
												<SelectItem value="Instagram">Instagram</SelectItem>
												<SelectItem value="LinkedIn">LinkedIn</SelectItem>
												<SelectItem value="Twitter">Twitter</SelectItem>
												<SelectItem value="Recomendações">{dict.careers.applicationForm.form.whereDoYouKnowUsOptions?.recommendations || 'Recommendations'}</SelectItem>
												<SelectItem value="Outros">{dict.careers.applicationForm.form.whereDoYouKnowUsOptions?.others || 'Others'}</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage>
											{form.formState.errors.whereDoYouKnowUs?.message && dict.careers.applicationForm.validation[form.formState.errors.whereDoYouKnowUs.message]}
										</FormMessage>
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="areaOfInterest"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{dict.careers.applicationForm.form.areaOfInterest} *</FormLabel>
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<FormControl>
												<SelectTrigger className="px-4 py-3 rounded-xl w-full">
													<SelectValue placeholder={dict.careers.applicationForm.form.areaOfInterestPlaceholder} />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="Front-End">{dict.careers.applicationForm.form.areaOfInterestOptions.frontend}</SelectItem>
												<SelectItem value="Back-End">{dict.careers.applicationForm.form.areaOfInterestOptions.backend}</SelectItem>
												<SelectItem value="Full Stack">{dict.careers.applicationForm.form.areaOfInterestOptions.fullstack}</SelectItem>
												<SelectItem value="UI/UX">{dict.careers.applicationForm.form.areaOfInterestOptions.uiux}</SelectItem>
												<SelectItem value="Ciência de Dados">{dict.careers.applicationForm.form.areaOfInterestOptions.dataScience}</SelectItem>
												<SelectItem value="AI/ML">{dict.careers.applicationForm.form.areaOfInterestOptions.aiml}</SelectItem>
												<SelectItem value="Business Intelligence">{dict.careers.applicationForm.form.areaOfInterestOptions.bi}</SelectItem>
												<SelectItem value="DevOps">{dict.careers.applicationForm.form.areaOfInterestOptions.devops}</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage>
											{form.formState.errors.areaOfInterest?.message && dict.careers.applicationForm.validation[form.formState.errors.areaOfInterest.message]}
										</FormMessage>
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="linkedin"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{dict.careers.applicationForm.form.linkedin}</FormLabel>
										<FormControl>
											<Input
												type="url"
												placeholder={dict.careers.applicationForm.form.linkedinPlaceholder}
												className="px-4 py-3 rounded-xl"
												{...field}
											/>
										</FormControl>
										<FormMessage>
											{form.formState.errors.linkedin?.message && dict.careers.applicationForm.validation[form.formState.errors.linkedin.message]}
										</FormMessage>
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="portfolio"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{dict.careers.applicationForm.form.portfolio}</FormLabel>
										<FormControl>
											<Input
												type="url"
												placeholder={dict.careers.applicationForm.form.portfolioPlaceholder}
												className="px-4 py-3 rounded-xl"
												{...field}
											/>
										</FormControl>
										<FormMessage>
											{form.formState.errors.portfolio?.message && dict.careers.applicationForm.validation[form.formState.errors.portfolio.message]}
										</FormMessage>
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="cv"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{dict.careers.applicationForm.form.cv} *</FormLabel>
										<FormControl>
											{field.value ? (
												<div className="flex items-center gap-3 p-4 border-2 border-brand/20 rounded-xl bg-brand/5 min-w-0">
													<Upload className="w-5 h-5 text-brand flex-shrink-0" />
													<span className="text-sm text-foreground truncate flex-1 font-medium min-w-0">
														{field.value.split('/').pop()}
													</span>
													<button
														type="button"
														onClick={() => form.setValue('cv', '')}
														className="text-xs text-red-500 hover:text-red-600 font-medium flex-shrink-0"
													>
														{dict.careers.applicationForm.form.remove || 'Remove'}
													</button>
												</div>
											) : (
												<div className="border-2 border-dashed border-gray-400/20 rounded-xl p-8 text-center hover:border-gray-400/30 transition-colors cursor-pointer">
													<input
														type="file"
														accept=".pdf,.doc,.docx"
														onChange={handleFileChange}
														className="hidden"
														id="cv-upload"
														disabled={isUploading}
													/>
													<label htmlFor="cv-upload" className="cursor-pointer">
														{isUploading ? (
															<div className="flex items-center justify-center gap-2">
																<Upload className="w-4 h-4 text-brand animate-pulse" />
																<span className="text-foreground">{dict.careers.applicationForm.form.uploading || 'Uploading...'}</span>
															</div>
														) : (
															<>
																<Upload className="size-6 text-muted-foreground mx-auto mb-3" />
																<p className="text-foreground font-medium">
																	{dict.careers.applicationForm.form.cvUpload}
																</p>
																<p className="text-sm text-muted-foreground mt-1">
																	{dict.careers.applicationForm.form.cvFormats}
																</p>
															</>
														)}
													</label>
												</div>
											)}
										</FormControl>
										<FormMessage>
											{form.formState.errors.cv?.message && dict.careers.applicationForm.validation[form.formState.errors.cv.message]}
										</FormMessage>
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{dict.careers.applicationForm.form.message} *</FormLabel>
										<FormControl>
											<Textarea
												rows={5}
												placeholder={dict.careers.applicationForm.form.messagePlaceholder}
												className="px-4 py-3 rounded-xl resize-none"
												{...field}
											/>
										</FormControl>
										<FormMessage>
											{form.formState.errors.message?.message && dict.careers.applicationForm.validation[form.formState.errors.message.message]}
										</FormMessage>
									</FormItem>
								)}
							/>

							<div className="pt-4">
								<Button
									type="submit"
									variant="brand"
									disabled={isSubmitting || isUploading || !form.watch('cv')}
									className="w-full"
								>
									{isSubmitting ? dict.careers.applicationForm.form.sending : dict.careers.applicationForm.form.send}
								</Button>
							</div>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
}
