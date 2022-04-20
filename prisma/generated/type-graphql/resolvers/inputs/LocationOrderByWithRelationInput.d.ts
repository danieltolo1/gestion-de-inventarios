import { PartComputerOrderByRelationAggregateInput } from "../inputs/PartComputerOrderByRelationAggregateInput";
export declare class LocationOrderByWithRelationInput {
    id_location?: "asc" | "desc" | undefined;
    city?: "asc" | "desc" | undefined;
    job_name?: "asc" | "desc" | undefined;
    partComputer?: PartComputerOrderByRelationAggregateInput | undefined;
}
