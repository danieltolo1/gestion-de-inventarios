import { AccountOrderByRelationAggregateInput } from "../inputs/AccountOrderByRelationAggregateInput";
import { MovimientoInventarioOrderByRelationAggregateInput } from "../inputs/MovimientoInventarioOrderByRelationAggregateInput";
import { SessionOrderByRelationAggregateInput } from "../inputs/SessionOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    emailVerified?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    accounts?: AccountOrderByRelationAggregateInput | undefined;
    sessions?: SessionOrderByRelationAggregateInput | undefined;
    movimientos?: MovimientoInventarioOrderByRelationAggregateInput | undefined;
}
