"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const loginSchema = z.object({
	email: z.email(),
	password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
})

type LoginFormValues = z.infer<typeof loginSchema>

export function LoginForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()

	const form = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	})

	async function onSubmit(data: LoginFormValues) {
		setIsLoading(true)

		try {
			const apiUrl = process.env.NEXT_PUBLIC_API_URL || ""

			const response = await fetch(`${apiUrl}/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			})

			if (!response.ok) {
				throw new Error("Falha ao fazer login")
			}

			const result = await response.json()

			toast.success("Login realizado com sucesso!")

			router.push("/dashboard")
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "Erro ao fazer login")
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle>Entre na sua conta</CardTitle>
					<CardDescription>
						Faça login para acessar suas informações e funcionalidades
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												type="email"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Senha</FormLabel>
										<FormControl>
											<Input type="password" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type="submit" className="w-full" disabled={isLoading}>
								{isLoading ? "Entrando..." : "Entrar"}
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	)
}
