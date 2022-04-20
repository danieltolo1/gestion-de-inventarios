import { ComputerOrderByWithRelationInput } from "../../../inputs/ComputerOrderByWithRelationInput";
import { ComputerWhereInput } from "../../../inputs/ComputerWhereInput";
import { ComputerWhereUniqueInput } from "../../../inputs/ComputerWhereUniqueInput";
export declare class AggregateComputerArgs {
    where?: ComputerWhereInput | undefined;
    orderBy?: ComputerOrderByWithRelationInput[] | undefined;
    cursor?: ComputerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
