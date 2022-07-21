import { ComputerOrderByRelationAggregateInput } from "../inputs/ComputerOrderByRelationAggregateInput";
export declare class ProgramOrderByWithRelationInput {
    id_program?: "asc" | "desc" | undefined;
    name_program?: "asc" | "desc" | undefined;
    version_program?: "asc" | "desc" | undefined;
    license_program?: "asc" | "desc" | undefined;
    computer?: ComputerOrderByRelationAggregateInput | undefined;
}
