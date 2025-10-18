dev:
	npm run dev

test: test-vitest test-playwright

test-vitest:
	npx vitest run

test-playwright:
	npx playwright test