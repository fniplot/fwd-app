import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静的エクスポート機能を使って SPA のように
  // ビルド・出力を行います
  output: 'export'
};

export default nextConfig;
