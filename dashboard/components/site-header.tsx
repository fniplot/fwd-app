import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <div className="ml-auto flex items-center gap-3">
          <a
            href="https://x.com/fwdfniplot"
            rel="noopener noreferrer"
            target="_blank"
            className="dark:text-foreground"
            aria-label="XでFWDを見る"
          >
            <IconBrandX aria-hidden="true" />
          </a>
          <a
            href="https://github.com/fniplot/fwd-app"
            rel="noopener noreferrer"
            target="_blank"
            className="dark:text-foreground"
            aria-label="GitHubでFWDを見る"
          >
            <IconBrandGithub aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
