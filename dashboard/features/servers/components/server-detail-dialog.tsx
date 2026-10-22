"use client";

import { getServerDetail } from "../api";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

type Props = {
  serverId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ServerDetailDialog({ serverId, open, onOpenChange }: Props) {
  /** 詳細なサーバー情報を取得 */
  const server = getServerDetail(serverId);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger
        render={
          <Button className="w-full">
            <Check /> サーバー情報を見る
          </Button>
        }
      ></DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>サーバー情報</DialogTitle>
          <DialogDescription>{server.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              IP アドレス
            </Label>
            {server.connection?.host}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              ポート
            </Label>
            {server.connection?.port}
          </div>
        </div>
        <DialogFooter>
          <DialogClose render={<Button>閉じる</Button>}></DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
