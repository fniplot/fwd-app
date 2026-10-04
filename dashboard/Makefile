dev-run:
	@npm run dev

# 本番環境用にデプロイ
build:
	@npm run build

# 簡易 HTTP サーバーパッケージ（serve）はローカル環境で
# 静的ファイルを簡単に配信するためのものです。
start: build
	@npx serve@latest out

# 検証環境用の S3 バケットにアップロードする
dev-upload:
	@aws s3 sync out/ s3://fwd-dev-app --delete