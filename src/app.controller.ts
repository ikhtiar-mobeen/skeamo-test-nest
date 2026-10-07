import { Controller, Get } from "@nestjs/common";

// Owns "/" so the workspace preview shows something rather than Nest's own
// 404, which reads as a broken app to anyone testing it.
@Controller()
export class AppController {
  @Get()
  index() {
    return { app: "skeamo-test-nest", try: "/orders" };
  }
}
