import { PartComputerOrderByWithRelationInput } from "../../../inputs/PartComputerOrderByWithRelationInput";
import { PartComputerWhereInput } from "../../../inputs/PartComputerWhereInput";
import { PartComputerWhereUniqueInput } from "../../../inputs/PartComputerWhereUniqueInput";
export declare class AggregatePartComputerArgs {
    where?: PartComputerWhereInput | undefined;
    orderBy?: PartComputerOrderByWithRelationInput[] | undefined;
    cursor?: PartComputerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
