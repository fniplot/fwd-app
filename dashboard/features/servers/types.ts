/** サーバーのシーズン情報 */
export type Season = {
  /** シーズン番号。未設定の場合は null */
  number: number | null
}

/** 開始日や次回リセット日時を含むシーズン情報 */
export type SeasonDetail = Season & {
  /** シーズン開始日時 */
  startedAt: string
  /** 次回リセット日時。予定がない場合は null */
  nextResetAt: string | null
}

/** サーバーの稼働状態 */
export type ServerStatus =
  | "running"
  | "stopped"

/** サーバー一覧で扱う基本情報 */
export type Server = {
  /** サーバーID */
  id: string;
  /** サーバー名 */
  name: string;
  /** サーバーの概要 */
  overview: string;
  /** 稼働状態 */
  status: ServerStatus;
  /** ゲームバージョン */
  gameVersion: string;
  /** 現在のプレイヤー数 */
  currentPlayers: number;
  /** 最大プレイヤー数 */
  maxPlayers: number | null;
  /** シーズン */
  season: Season | null;
};

/** サーバーの詳細情報 */
export type ServerDetail = Server & {
  /** サーバーの説明 */
  description: string;
  /** 接続情報 */
  connection: {
    /** 接続先ホスト */
    host: string;
    /** 接続先ポート */
    port: number;
  } | null;
  /** シーズンの詳細情報 */
  season: SeasonDetail | null
  /** 最終更新日 */
  lastUpdatedAt: string | null;
}

/** サーバー一覧 API のレスポンス */
export type ServerListResponse = {
  /** サーバー一覧 */
  data: Server[];
}

/** サーバー詳細 API のレスポンス */
export type ServerDetailResponse = {
  /** サーバー詳細 */
  data: ServerDetail;
}