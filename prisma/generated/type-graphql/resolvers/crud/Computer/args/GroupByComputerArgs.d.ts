import { ComputerOrderByWithAggregationInput } from "../../../inputs/ComputerOrderByWithAggregationInput";
import { ComputerScalarWhereWithAggregatesInput } from "../../../inputs/ComputerScalarWhereWithAggregatesInput";
import { ComputerWhereInput } from "../../../inputs/ComputerWhereInput";
export declare class GroupByComputerArgs {
    where?: ComputerWhereInput | undefined;
    orderBy?: ComputerOrderByWithAggregationInput[] | undefined;
    by: Array<"id_computer" | "buy_date" | "price" | "internal_code" | "serial_number" | "memory" | "hard_disk" | "processor" | "optical_unit" | "model" | "stateId" | "softwarecomputerId" | "observation" | "historial">;
    having?: ComputerScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
