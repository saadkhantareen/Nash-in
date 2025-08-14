# CRUSH.md
This file guides agents working in this Next.js/Bun codebase.

## Build/Lint/Test Commands
- Dev server: `bun run dev`
- Build: `bun run build`
- Lint: `bun run lint`
- Typecheck: `bun run typecheck`
- Test all: `bun run test`
- Test single file: `bun run test -- <path>`

## Code Style
- **Imports**: Prefer relative paths; use `/lib` for shared utilities
- **Formatting**: Prettier (see .prettierrc); 2-space indent
- **Types**: Strict TypeScript; no `any`
- **Naming**: PascalCase for components, camelCase for functions
- **Error Handling**: Use `try/catch`; avoid silent failures
- **Components**: Organize in `components/ui` with shadcn pattern
- **Styling**: Tailwind CSS with `cn` utility

## Rules
- Commit messages: Present tense, "Fix X" not "Fixed X"
- No console.log in production code