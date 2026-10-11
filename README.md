# fwd-dashboard

FWD サービスの状況を提供するダッシュボード

## Next.js アプリを作成

```bash
$ npx create-next-app@latest
✔ What is your project named? … dashboard
✔ Would you like to use the recommended Next.js defaults? › Yes, use recommended defaults
Creating a new Next.js app in /home/keisuke/Workspace/FactorioWeeklyDefense/fwd-app/dashboard.

Using npm.

Initializing project with template: app-tw

Installing dependencies:
- next
- react
- react-dom

Installing devDependencies:
- @tailwindcss/postcss
- @types/node
- @types/react
- @types/react-dom
- eslint
- eslint-config-next
- tailwindcss
- typescript

npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 359 packages, and audited 360 packages in 41s

147 packages are looking for funding
  run `npm fund` for details

5 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
npm warn install-scripts 1 package has install scripts not yet covered by allowScripts:
npm warn install-scripts   unrs-resolver@1.12.2 (postinstall: node postinstall.js)
npm warn install-scripts
npm warn install-scripts Run `npm install-scripts ls` to review, or `npm install-scripts approve <pkg>` to allow.

Generating route types...
✓ Types generated successfully

Success! Created dashboard at /home/keisuke/Workspace/FactorioWeeklyDefense/fwd-app/dashboard
$
```
## shadcn/ui のセットアップ

```bash
$ npx shadcn@latest init -t next
✔ Select a component library › Base UI (Recommended)
✔ Which preset would you like to use? › Sera
✔ Preflight checks.
✔ Verifying framework. Found Next.js.
✔ Validating Tailwind CSS. Found v4.
✔ Validating import alias.
✔ Writing components.json.
✔ Checking registry.
✔ Installing dependencies.
✔ Updating fonts.
✔ Created 2 files:
  - components/ui/button.tsx
  - lib/utils.ts
✔ Updating app/globals.css

Project initialization completed.
You may now add components.
$
```