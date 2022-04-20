import { SoftwareComputerOrderByWithRelationInput } from "../../../inputs/SoftwareComputerOrderByWithRelationInput";
import { SoftwareComputerWhereInput } from "../../../inputs/SoftwareComputerWhereInput";
import { SoftwareComputerWhereUniqueInput } from "../../../inputs/SoftwareComputerWhereUniqueInput";
export declare class AggregateSoftwareComputerArgs {
    where?: SoftwareComputerWhereInput | undefined;
    orderBy?: SoftwareComputerOrderByWithRelationInput[] | undefined;
    cursor?: SoftwareComputerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
