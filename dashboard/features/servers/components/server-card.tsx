"use client";

import type { Server } from "../types";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { IconDeviceGamepad2, IconUsers, IconFlag } from "@tabler/icons-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ServerDetailDialog } from "./server-detail-dialog";

type ServerCardProps = React.ComponentProps<typeof Card> & {
  server: Server;
};

export function ServerCard({ server, className, ...props }: ServerCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <Card {...props} className={cn("w-full sm:w-[380px]", className)}>
      <CardHeader>
        <CardTitle className="flex w-full items-center justify-between gap-3">
          <span>{server.name}</span>
          <span
            className={cn(
              "shrink-0 rounded-full px-2 py-1 text-xs font-medium",
              server.status === "running"
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-700",
            )}
          >
            {server.status === "running" ? "稼働中" : "停止中"}
          </span>
        </CardTitle>
        <CardDescription>{server.overview}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <IconDeviceGamepad2 size={18} />
              ゲームバージョン {server.gameVersion}
            </p>

            <p className="flex items-center gap-2">
              <IconUsers size={18} />
              {server.currentPlayers} / {server.maxPlayers ?? "∞"} Players
            </p>
            <p className="flex items-center gap-2">
              <IconFlag size={18} />
              Season {server.season?.number ?? "∞"}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <ServerDetailDialog
          serverId={server.id}
          open={open}
          onOpenChange={setOpen}
        />
      </CardFooter>
    </Card>
  );
}
