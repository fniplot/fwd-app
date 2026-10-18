"use client"

import * as React from "react"

import {
  IconDashboard,
  IconHome,
  // IconCalendar,
  // IconTrophy,
  IconServer,
  // IconPlayerPlay,
  // IconChartBar,
  // IconUsers,
  IconCode,
  IconShieldCheck
} from "@tabler/icons-react"

import { NavMain } from "@/components/nav-main"
import { NavProject } from "@/components/nav-project"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "ホーム",
      url: "/",
      icon: IconHome
    },
    // {
    //   title: "ライブ",
    //   url: "#",
    //   icon: IconPlayerPlay
    // },
    // {
    //   title: "シーズン",
    //   url: "#",
    //   icon: IconCalendar
    // },
    // {
    //   title: "ランキング",
    //   url: "#",
    //   icon: IconTrophy
    // },
    // {
    //   title: "プレイヤー",
    //   url: "#",
    //   icon: IconUsers
    // },
    {
      title: "サーバー",
      url: "/servers",
      icon: IconServer
    },
    // {
    //   title: "統計",
    //   url: "#",
    //   icon: IconChartBar
    // }
  ],
  project: [
    {
      title: "開発者",
      url: "/about",
      icon: IconCode,
    },
    {
      title: "運用方針",
      url: "/policy",
      icon: IconShieldCheck,
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              render={
                <a href="/">
                  <IconDashboard className="size-5!" />
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="text-base font-semibold">Factorio Weekly Defense</span>
                    <span className="">v0.0.2</span>
                  </div>
                </a>
              }
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProject items={data.project}></NavProject>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
