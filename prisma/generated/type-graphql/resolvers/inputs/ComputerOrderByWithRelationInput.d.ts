import { PartComputerOrderByRelationAggregateInput } from "../inputs/PartComputerOrderByRelationAggregateInput";
import { SoftwareComputerOrderByWithRelationInput } from "../inputs/SoftwareComputerOrderByWithRelationInput";
import { StateOrderByWithRelationInput } from "../inputs/StateOrderByWithRelationInput";
export declare class ComputerOrderByWithRelationInput {
    id_computer?: "asc" | "desc" | undefined;
    buy_date?: "asc" | "desc" | undefined;
    price?: "asc" | "desc" | undefined;
    internal_code?: "asc" | "desc" | undefined;
    serial_number?: "asc" | "desc" | undefined;
    memory?: "asc" | "desc" | undefined;
    hard_disk?: "asc" | "desc" | undefined;
    processor?: "asc" | "desc" | undefined;
    optical_unit?: "asc" | "desc" | undefined;
    model?: "asc" | "desc" | undefined;
    state?: StateOrderByWithRelationInput | undefined;
    stateId?: "asc" | "desc" | undefined;
    softwarecomputer?: SoftwareComputerOrderByWithRelationInput | undefined;
    softwarecomputerId?: "asc" | "desc" | undefined;
    partComputer?: PartComputerOrderByRelationAggregateInput | undefined;
    observation?: "asc" | "desc" | undefined;
    historial?: "asc" | "desc" | undefined;
}
