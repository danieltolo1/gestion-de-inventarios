import { ComputerCreateInput } from "../../../inputs/ComputerCreateInput";
import { ComputerUpdateInput } from "../../../inputs/ComputerUpdateInput";
import { ComputerWhereUniqueInput } from "../../../inputs/ComputerWhereUniqueInput";
export declare class UpsertComputerArgs {
    where: ComputerWhereUniqueInput;
    create: ComputerCreateInput;
    update: ComputerUpdateInput;
}
