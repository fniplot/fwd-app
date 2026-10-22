import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ServerList } from "@/features/servers/components/server-list";

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
        <div className="flex flex-1 flex-col gap-4 p-4 sm:p-10">
          <div className="space-y-4">
            <h1 className="text-4xl leading-tight font-bold">
              ゲームサーバー一覧
            </h1>
            <p className="leading-7">現在、サービス開始に向けて準備中です。</p>
            <p className="leading-7">
              サービス開始後は、開催中のシーズンに参加できるFactorioサーバーの情報をこちらで確認できるようにする予定です。
            </p>
            <ServerList />
            <p className="leading-6">サーバーの準備が整い次第、公開します。</p>
            <p className="leading-7">COMING SOON</p>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
