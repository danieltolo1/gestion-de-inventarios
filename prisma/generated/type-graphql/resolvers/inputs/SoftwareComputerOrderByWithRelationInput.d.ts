import { ComputerOrderByRelationAggregateInput } from "../inputs/ComputerOrderByRelationAggregateInput";
export declare class SoftwareComputerOrderByWithRelationInput {
    id_softwarecomputer?: "asc" | "desc" | undefined;
    computer?: ComputerOrderByRelationAggregateInput | undefined;
    operatingsystem?: "asc" | "desc" | undefined;
    license_soA?: "asc" | "desc" | undefined;
    architecture?: "asc" | "desc" | undefined;
}
