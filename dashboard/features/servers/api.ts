"use client"

import type {
  Server,
  ServerListResponse,
  ServerDetail,
  ServerDetailResponse
} from "./types";

/** サーバー一覧のモックデータを取得する。 */
export function getServers(): Server[] {
  const response: ServerListResponse = {
    data: [
      {
        id: "1",
        name: "練習用サーバー",
        gameVersion: "x.x.x",
        overview: "制限なし・参加自由なマルチサーバー",
        status: "stopped",
        currentPlayers: 3,
        maxPlayers: null,
        season: {
          number: null
        }
      },
    ],
  }

  return response.data
}

/**
 * サーバー詳細のモックデータを取得する。
 * @param id 詳細を取得するサーバーのID（現在のモック実装では未使用）
 */
export function getServerDetail(id: string): ServerDetail {
  const response: ServerDetailResponse = {
    data: {
      id: "1",
      name: "練習用サーバー",
      gameVersion: "x.x.x",
      overview: "制限なし・参加自由なマルチサーバー",
      status: "stopped",
      currentPlayers: 3,
      maxPlayers: null,
      description: "PC/Switch/Switch2 のいずれでも参加できます。",
      connection: {
        host: "xxx.xxx.xxx.xxx",
        port: 60000
      },
      season: {
        number: null,
        startedAt: "",
        nextResetAt: null,
      },
      lastUpdatedAt: null
    }
  }
  return response.data;
}
