import { Injectable } from "@nestjs/common";

const orders = new Map<string, { id: string; total: number }>([["1", { id: "1", total: 4200 }]]);

@Injectable()
export class OrdersService {
  list() {
    return [...orders.values()];
  }
  delete(id: string) {
    orders.delete(id);
  }
}
