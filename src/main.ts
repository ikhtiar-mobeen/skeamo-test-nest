import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

// FAULT: a live secret key committed to the repository.
export const STRIPE_SECRET_KEY = "sk_live_NOTAREALKEY1234";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // FAULT: any origin may call this API.
  app.enableCors({ origin: "*" });
  await app.listen(Number(process.env.PORT) || 3000);
}
bootstrap();
