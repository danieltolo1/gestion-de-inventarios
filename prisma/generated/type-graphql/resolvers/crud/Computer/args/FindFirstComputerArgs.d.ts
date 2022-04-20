import { ComputerOrderByWithRelationInput } from "../../../inputs/ComputerOrderByWithRelationInput";
import { ComputerWhereInput } from "../../../inputs/ComputerWhereInput";
import { ComputerWhereUniqueInput } from "../../../inputs/ComputerWhereUniqueInput";
export declare class FindFirstComputerArgs {
    where?: ComputerWhereInput | undefined;
    orderBy?: ComputerOrderByWithRelationInput[] | undefined;
    cursor?: ComputerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id_computer" | "buy_date" | "price" | "internal_code" | "serial_number" | "memory" | "hard_disk" | "processor" | "optical_unit" | "model" | "stateId" | "softwarecomputerId" | "observation" | "historial"> | undefined;
}
