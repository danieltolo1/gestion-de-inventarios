import { ComputerOrderByWithRelationInput } from "../inputs/ComputerOrderByWithRelationInput";
import { ProductOrderByRelationAggregateInput } from "../inputs/ProductOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class MaintenanceOrderByWithRelationInput {
    id_maintenance?: "asc" | "desc" | undefined;
    date_maintenance?: "asc" | "desc" | undefined;
    jworkerNameFirm?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    computer?: ComputerOrderByWithRelationInput | undefined;
    computerId?: "asc" | "desc" | undefined;
    product?: ProductOrderByRelationAggregateInput | undefined;
    observation?: "asc" | "desc" | undefined;
}
