import { ComputerOrderByRelationAggregateInput } from "../inputs/ComputerOrderByRelationAggregateInput";
import { ProductOrderByRelationAggregateInput } from "../inputs/ProductOrderByRelationAggregateInput";
export declare class LocationOrderByWithRelationInput {
    id_location?: "asc" | "desc" | undefined;
    internal_code?: "asc" | "desc" | undefined;
    city?: "asc" | "desc" | undefined;
    job_name?: "asc" | "desc" | undefined;
    computer?: ComputerOrderByRelationAggregateInput | undefined;
    porduct?: ProductOrderByRelationAggregateInput | undefined;
}
