import { Controller, Get, Post, Param } from "@nestjs/common";
import { OrdersService } from "./orders.service";

@Controller()
export class OrdersController {
  constructor(private readonly orders: OrdersService) {}

  // A root route so the workspace preview shows something rather than Nest's
  // own 404, which reads as a broken app to anyone testing.
  @Get()
  index() {
    return { app: "skeamo-test-nest", try: "/orders" };
  }

  @Get("orders")
  list() {
    return this.orders.list();
  }

  // FAULT: deletes data with no guard on the route or the controller.
  @Post("orders/:id/delete")
  remove(@Param("id") id: string) {
    this.orders.delete(id);
    return { ok: true };
  }
}
