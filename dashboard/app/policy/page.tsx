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
            <h1 className="text-4xl leading-tight font-bold">運用方針について</h1>
            <h2 className="text-2xl leading-snug font-semibold">気軽に楽しめる場所を目指して</h2>
            <p className="leading-7">
              FWD（Factorio Weekly Defense）は、誰もが気軽に参加し、
              Factorio を楽しめる場所を目指しています。
              初心者も経験者も、それぞれのペースで工場づくりや防衛に取り組み、
              一緒にゲームを楽しめる環境を大切にします。
            </p>
           
            <h2 className="text-2xl leading-snug font-semibold">自由に楽しめる環境づくり</h2>
            <p className="leading-7">
              参加者のみなさんが自由に楽しめるよう、
              必要以上に細かいルールは設けず、気軽に参加できる運営を心がけます。
              ただし、ほかの参加者の迷惑となる行為や、
              サービスの継続的な運営を妨げる行為については、
              状況に応じて対応します。
            </p>
           
            <h2 className="text-2xl leading-snug font-semibold">個人運営について</h2>
            <p className="leading-7">
              本サービスは、個人で開発・運営・保守を行っています。
              そのため、機能の追加や改善に時間がかかる場合や、
              メンテナンスなどによりサービスを一時的に利用できなくなる場合があります。
              あたたかく見守っていただけるとうれしいです。
            </p>
           
            <h2 className="text-2xl leading-snug font-semibold">少しずつ育てていくサービス</h2>
            <p className="leading-7">
              FWD は、開発者自身も楽しみながら、
              参加者のみなさんと一緒に少しずつ育てていくサービスです。
              ご意見やご要望を参考にしながら、より楽しめる環境を目指して改善を続けていきます。
            </p>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
