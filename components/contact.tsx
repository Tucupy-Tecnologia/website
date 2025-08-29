'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Mail, MessageSquare, User, Building2, MapPin, Phone } from 'lucide-react';

interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	company: string;
	message: string;
}

interface FormErrors {
	firstName?: string;
	lastName?: string;
	email?: string;
	message?: string;
}

export function Contact(): React.ReactElement {
	const [formData, setFormData] = useState<FormData>({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		company: '',
		message: ''
	});

	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

	function validateForm(): FormErrors {
		const newErrors: FormErrors = {};

		if (!formData.firstName.trim()) {
			newErrors.firstName = 'First name is required';
		}

		if (!formData.lastName.trim()) {
			newErrors.lastName = 'Last name is required';
		}

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address';
		}

		if (!formData.message.trim()) {
			newErrors.message = 'Message is required';
		}

		return newErrors;
	}

	function handleInputChange(field: keyof FormData, value: string): void {
		setFormData(prev => ({ ...prev, [field]: value }));
		// Clear error when user starts typing
		if (errors[field as keyof FormErrors]) {
			setErrors(prev => ({ ...prev, [field]: undefined }));
		}
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
		e.preventDefault();

		const newErrors = validateForm();
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		setIsSubmitting(true);

		try {
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 1500));
			setIsSubmitted(true);
			setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', message: '' });
		} catch (error) {
			console.error('Error submitting form:', error);
		} finally {
			setIsSubmitting(false);
		}
	}

	if (isSubmitted) {
		return (
			<div className="bg-background">
				<div className="mx-auto max-w-2xl lg:max-w-6xl px-4">
					<div>
						<h2 className="text-base/7 font-semibold text-muted-foreground">Contact</h2>
						<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-foreground">
							Let's build something <span className="text-brand">amazing together</span>
						</p>
						<p className="mt-6 text-lg/8 text-muted-foreground max-w-3xl">
							Ready to turn your vision into reality? Tell us about your project and we'll show you how we can help.
						</p>
					</div>

					<div className="w-full mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
						<div className="bg-primary rounded-3xl p-12 flex flex-col justify-center">
							<div className="mx-auto w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mb-6">
								<Mail className="w-8 h-8 text-brand" />
							</div>
							<h3 className="text-3xl font-semibold text-foreground mb-4 text-center">
								Message sent successfully!
							</h3>
							<p className="text-lg text-muted-foreground mb-8 text-center">
								Thank you for reaching out. We'll get back to you within 24 hours.
							</p>
							<Button
								variant="brand"
								onClick={() => setIsSubmitted(false)}
								className="mx-auto"
							>
								Send another message
							</Button>
						</div>
						<div className="bg-primary rounded-3xl p-12 flex items-center justify-center">
							<div className="text-center text-muted-foreground">
								<Mail className="w-12 h-12 mx-auto mb-4 opacity-30" />
								<p>Your message is on its way</p>
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
					<h2 className="text-base/7 font-semibold text-muted-foreground">Contact</h2>
					<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-foreground">
						Let's build something <span className="text-brand">amazing together</span>
					</p>
					<p className="mt-6 text-lg/8 text-muted-foreground max-w-3xl">
						Ready to turn your vision into reality? Tell us about your project and we'll show you how we can help.
					</p>
				</div>

				<div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Contact Info */}
					<div className="rounded-3xl">
						<div className="max-w-lg">
							<h3 className="text-2xl font-semibold text-foreground mb-6">
								Get in touch
							</h3>
							<p className="text-muted-foreground mb-10 text-lg">
								Ready to start your project? We're here to help bring your vision to life with cutting-edge solutions and expert guidance.
							</p>

							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<div className="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center">
										<Mail className="w-5 h-5 text-brand" />
									</div>
									<div>
										<p className="text-foreground font-medium">Email us</p>
										<a href="mailto:contato@tucupy.com" className="text-muted-foreground hover:text-brand transition-colors">
											contato@tucupy.com
										</a>
									</div>
								</div>
								
								<div className="flex items-start gap-4">
									<div className="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center">
										<Phone className="w-5 h-5 text-brand" />
									</div>
									<div>
										<p className="text-foreground font-medium">Call us</p>
										<a href="tel:+5591991011351" className="text-muted-foreground hover:text-brand transition-colors">
											+55 (91) 99101-1351
										</a>
									</div>
								</div>
								
								<div className="flex items-start gap-4">
									<div className="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center">
										<MapPin className="w-5 h-5 text-brand" />
									</div>
									<div>
										<p className="text-foreground font-medium">Visit us</p>
										<p className="text-muted-foreground">
											Ed. Connext, Salas 807-808<br />
											Tv. Dom Romualdo de Seixas, 1560<br />
											Umarizal, Belém - PA, 66055-200
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className="bg-primary rounded-3xl p-8">
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								<div>
									<label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
										First Name *
									</label>
									<input
										type="text"
										id="firstName"
										value={formData.firstName}
										onChange={(e) => handleInputChange('firstName', e.target.value)}
										className={`block w-full px-4 py-3 bg-background border rounded-xl text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors ${errors.firstName ? 'border-red-500' : 'border-gray-400/20'
											}`}
										placeholder="John"
									/>
									{errors.firstName && (
										<p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
									)}
								</div>

								<div>
									<label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
										Last Name *
									</label>
									<input
										type="text"
										id="lastName"
										value={formData.lastName}
										onChange={(e) => handleInputChange('lastName', e.target.value)}
										className={`block w-full px-4 py-3 bg-background border rounded-xl text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors ${errors.lastName ? 'border-red-500' : 'border-gray-400/20'
											}`}
										placeholder="Doe"
									/>
									{errors.lastName && (
										<p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
									)}
								</div>
							</div>

							<div>
								<label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
									Email Address *
								</label>
								<input
									type="email"
									id="email"
									value={formData.email}
									onChange={(e) => handleInputChange('email', e.target.value)}
									className={`block w-full px-4 py-3 bg-background border rounded-xl text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors ${errors.email ? 'border-red-500' : 'border-gray-400/20'
										}`}
									placeholder="john@company.com"
								/>
								{errors.email && (
									<p className="mt-1 text-sm text-red-500">{errors.email}</p>
								)}
							</div>

							<div>
								<label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
									Phone Number
								</label>
								<input
									type="tel"
									id="phone"
									value={formData.phone}
									onChange={(e) => handleInputChange('phone', e.target.value)}
									className="block w-full px-4 py-3 bg-background border border-gray-400/20 rounded-xl text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors"
									placeholder="+1 (234) 567-890"
								/>
							</div>

							<div>
								<label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
									Company
								</label>
								<input
									type="text"
									id="company"
									value={formData.company}
									onChange={(e) => handleInputChange('company', e.target.value)}
									className="block w-full px-4 py-3 bg-background border border-gray-400/20 rounded-xl text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors"
									placeholder="Your Company"
								/>
							</div>

							<div>
								<label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
									Project Details *
								</label>
								<textarea
									id="message"
									rows={5}
									value={formData.message}
									onChange={(e) => handleInputChange('message', e.target.value)}
									className={`block w-full px-4 py-3 bg-background border rounded-xl text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-gray-400/20'
										}`}
									placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
								/>
								{errors.message && (
									<p className="mt-1 text-sm text-red-500">{errors.message}</p>
								)}
							</div>

							<div className="pt-4">
								<Button
									type="submit"
									variant="brand"
									disabled={isSubmitting}
									className="w-full"
								>
									{isSubmitting ? 'Sending...' : 'Send Message'}
								</Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
