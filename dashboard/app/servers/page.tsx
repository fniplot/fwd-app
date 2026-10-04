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
            <h1 className="text-4xl leading-tight font-bold">サーバー</h1>
            <h2 className="text-2xl leading-snug font-semibold">Factorio Weekly Defense のゲームサーバー</h2>
            <p className="leading-7">
              現在、サービス開始に向けて準備中です。
            </p>
            <p className="leading-7">
              現在、Factorio Weekly Defense のゲームサーバーを準備しています。
            </p>
            <p className="leading-7">
              サービス開始後は、開催中のシーズンに参加できるFactorioサーバーの情報をこちらで確認できるようにする予定です。
            </p>
            <p className="leading-7">掲載予定の情報</p>
            <ul className="list-disc space-y-2 pl-6 leading-7">
              <li>サーバーの稼働状況</li>
              <li>サーバーへの接続情報</li>
              <li>その他の情報</li>
            </ul>
            <p className="leading-7">
              サーバーの準備が整い次第、公開します。
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
