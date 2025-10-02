"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import React from "react"
import { Search } from "lucide-react"

export function SiteHeader() {
	const pathname = usePathname()

	const segments = pathname.split("/").filter(Boolean)

	const breadcrumbs = segments.map((segment, index) => {
		const path = `/${segments.slice(0, index + 1).join("/")}`
		const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ")
		return { path, label }
	})

	return (
		<header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
			<div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
				<SidebarTrigger className="-ml-1" />
				<Separator
					orientation="vertical"
					className="mx-2 data-[orientation=vertical]:h-4"
				/>
				<Breadcrumb>
					<BreadcrumbList>
						{breadcrumbs.map((breadcrumb, index) => (
							<React.Fragment key={breadcrumb.path}>
								<BreadcrumbItem>
									{index === breadcrumbs.length - 1 ? (
										<BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
									) : (
										<BreadcrumbLink asChild>
											<Link href={breadcrumb.path}>{breadcrumb.label}</Link>
										</BreadcrumbLink>
									)}
								</BreadcrumbItem>
								{index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
							</React.Fragment>
						))}
					</BreadcrumbList>
				</Breadcrumb>
				<div className="ml-auto flex items-center gap-2">
					<Button variant="ghost" asChild className="hidden sm:flex">
						<Search className="h-4 w-4 text-gray-500" />
					</Button>
				</div>
			</div>
		</header>
	)
}
