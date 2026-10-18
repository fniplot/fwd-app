"use client"

import { ServerCard } from "./server-card"
import { getServers } from "../api"; 

export function ServerList() {
  const servers = getServers();

  if (servers.length === 0) {
    return <p>現在、公開サーバーはありません。</p>
  }

  return (
    <div>
      {servers.map((server) => (
        <ServerCard key={server.id} server={server}></ServerCard>
      ))}
    </div>
  )
}