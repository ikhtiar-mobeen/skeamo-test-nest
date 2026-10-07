# skeamo-test-nest

A deliberately insecure **NestJS** app, for testing Skeamo's launch report.

Do not deploy this. It is broken on purpose.

## Planted faults

1. A live Stripe secret key hardcoded in `src/main.ts`
2. `POST /orders/:id/delete` writes with no guard
3. CORS open to every origin

## Running it

```bash
npm install
npm run dev
```

It binds to `process.env.PORT`, so the workspace preview finds it.
