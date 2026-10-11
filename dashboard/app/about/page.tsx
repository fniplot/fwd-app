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
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col gap-4 p-10">
          <div className="space-y-4">
            <h1 className="text-4xl leading-tight font-bold">開発者について</h1>
            {/* <h2 className="text-2xl leading-snug font-semibold">Factorio Weekly Defense のゲームサーバー</h2> */}
            <p className="leading-7">
              はじめまして、へっぽこ工場長の <b>フニプ</b> と申します。
            </p>
            <p className="leading-7">
              工場の立ち上げもままならない腕前ですが、Factorio のゲームサーバーを運営したら
            </p>
            <p className="leading-7">
              楽しそうだな、と思い、本サービスを立ち上げました。
            </p>
            <br />
            <p className="leading-7">
              個人で開発・運営・保守を行っているため、
              機能の追加や改善には時間がかかることもありますが、
            </p>
            <p className="leading-7">
              みなさんに楽しんでいただけるサービスを目指して、
              少しずつ育てていきたいと思っています。
            </p>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
