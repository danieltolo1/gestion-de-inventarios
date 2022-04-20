import { PartComputerOrderByRelationAggregateInput } from "../inputs/PartComputerOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class MaintenanceOrderByWithRelationInput {
    id_maintenance?: "asc" | "desc" | undefined;
    date_maintenance?: "asc" | "desc" | undefined;
    jworkerNameFirm?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    partComputer?: PartComputerOrderByRelationAggregateInput | undefined;
}
