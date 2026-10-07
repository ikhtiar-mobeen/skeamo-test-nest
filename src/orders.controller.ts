import { Controller, Get, Post, Param } from "@nestjs/common";
import { OrdersService } from "./orders.service";

@Controller("orders")
export class OrdersController {
  constructor(private readonly orders: OrdersService) {}

  @Get()
  list() {
    return this.orders.list();
  }

  // FAULT: deletes data with no guard on the route or the controller.
  @Post(":id/delete")
  remove(@Param("id") id: string) {
    this.orders.delete(id);
    return { ok: true };
  }
}
