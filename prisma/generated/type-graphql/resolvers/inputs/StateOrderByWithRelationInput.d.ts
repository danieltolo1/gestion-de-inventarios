import { ComputerOrderByRelationAggregateInput } from "../inputs/ComputerOrderByRelationAggregateInput";
import { ProductOrderByRelationAggregateInput } from "../inputs/ProductOrderByRelationAggregateInput";
export declare class StateOrderByWithRelationInput {
    id_state?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    product?: ProductOrderByRelationAggregateInput | undefined;
    computer?: ComputerOrderByRelationAggregateInput | undefined;
}
