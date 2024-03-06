# Impression

## Pros

- default export なし
- docs 充実
- ボイラーな部分（以下）は、dev server 起動中は自動生成・自動修正してくれるので、かなり開発体験が良さそう

```tsx
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/posts/$postId/")({
  component: Post,
})
```

- 以下の Component 名の部分は、Copilot が補完してくれるので、命名の統一はしやすそうかも
  - 反面、ただの `Component` でもよさそう。
  - React DevTools で Component 名が見えるわけでもなさそうなので、命名考えるモチベがなさそう。

> component: PostsPostIdCommentId,
> function PostsPostIdCommentId() {

## Cons

- ボイラーテンプレートなコードを全ページに実装することになる

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
