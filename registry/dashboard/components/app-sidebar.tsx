"use client"

import * as React from "react"

import { NavMain } from "@/registry/dashboard/components/nav-main"
import { NavSecondary } from "@/registry/dashboard/components/nav-secondary"
import { NavUser } from "@/registry/dashboard/components/nav-user"
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
	ChartBar,
	CircleHelp,
	Folder,
	LucideLayoutDashboard,
	Search,
	Settings,
	Users
} from "lucide-react"

const data = {
	user: {
		name: "Tucupy",
		email: "email@tucupy.com",
		avatar: "https://avatars.githubusercontent.com/u/169272657?s=200&v=4",
	},
	navMain: [
		{
			title: "Dashboard",
			url: "/dashboard",
			icon: LucideLayoutDashboard,
		},
		{
			title: "Analytics",
			url: "/dashboard/analytics",
			icon: ChartBar,
		},
		{
			title: "Projetos",
			url: "/dashboard/projetos",
			icon: Folder,
		},
		{
			title: "Usuários",
			url: "/dashboard/usuarios",
			icon: Users,
		},
	],
	navSecondary: [
		{
			title: "Configurações",
			url: "/dashboard/configuracoes",
			icon: Settings,
		},
		{
			title: "Ajuda",
			url: "/dashboard/ajuda",
			icon: CircleHelp,
		},
		{
			title: "Buscar",
			url: "#",
			icon: Search,
		},
	],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="offcanvas" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							className="data-[slot=sidebar-menu-button]:!p-1.5"
						>
							<a href="/">
								<span className="text-base font-semibold">Tucupy Tecnologia</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavSecondary items={data.navSecondary} className="mt-auto" />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
		</Sidebar>
	)
}
