import { SoftwareComputerOrderByWithAggregationInput } from "../../../inputs/SoftwareComputerOrderByWithAggregationInput";
import { SoftwareComputerScalarWhereWithAggregatesInput } from "../../../inputs/SoftwareComputerScalarWhereWithAggregatesInput";
import { SoftwareComputerWhereInput } from "../../../inputs/SoftwareComputerWhereInput";
export declare class GroupBySoftwareComputerArgs {
    where?: SoftwareComputerWhereInput | undefined;
    orderBy?: SoftwareComputerOrderByWithAggregationInput[] | undefined;
    by: Array<"id_softwarecomputer" | "operatingsystem" | "license_soA" | "architecture">;
    having?: SoftwareComputerScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
