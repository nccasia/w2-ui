import { RelayToFlat } from "@saleor/types";

export interface ActionQueries {
  catalog: any;
  customers: RelayToFlat<any>;
  order: any;
}
