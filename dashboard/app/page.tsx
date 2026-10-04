import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar version="v0.0.1" variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col gap-4 p-10">
          <div className="space-y-4">
            <h1 className="text-4xl leading-tight font-bold">Factorio Weekly Defense</h1>
            <h2 className="text-2xl leading-snug font-semibold">毎週開催されるバニラ防衛チャレンジ</h2>
            <p className="leading-7">
              現在、サービス開始に向けて準備中です。
            </p>
            <p className="leading-7">
              毎週新しいシーズンで工場を築き、
              バイターからどこまで生き残れるかに挑戦します。
            </p>
            <p className="leading-7">
              シーズンの戦績やランキングを記録し、
              プレイヤーの戦いを楽しめるサービスを目指しています。
            </p>
            <p className="leading-7">
              COMING SOON
            </p>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
