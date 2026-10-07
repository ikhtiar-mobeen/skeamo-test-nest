import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { OrdersController } from "./orders.controller";
import { OrdersService } from "./orders.service";

@Module({ controllers: [AppController, OrdersController], providers: [OrdersService] })
export class AppModule {}
