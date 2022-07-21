import { ComputerOrderByWithRelationInput } from "../../../inputs/ComputerOrderByWithRelationInput";
import { ComputerWhereInput } from "../../../inputs/ComputerWhereInput";
import { ComputerWhereUniqueInput } from "../../../inputs/ComputerWhereUniqueInput";
export declare class SoftwareComputerComputerArgs {
    where?: ComputerWhereInput | undefined;
    orderBy?: ComputerOrderByWithRelationInput[] | undefined;
    cursor?: ComputerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id_computer" | "buy_date" | "price" | "internal_code" | "serial_number" | "memory" | "hard_disk" | "processor" | "optical_unit" | "model" | "stateId" | "ip" | "softwarecomputerId" | "locationId" | "observation" | "historial" | "user_domain" | "pass_domain" | "user_admin" | "pass_admin" | "user_local" | "pass_local" | "user_anydesk" | "pass_anydesk"> | undefined;
}
