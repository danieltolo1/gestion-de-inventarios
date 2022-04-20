import { SoftwareComputerOrderByWithAggregationInput } from "../../../inputs/SoftwareComputerOrderByWithAggregationInput";
import { SoftwareComputerScalarWhereWithAggregatesInput } from "../../../inputs/SoftwareComputerScalarWhereWithAggregatesInput";
import { SoftwareComputerWhereInput } from "../../../inputs/SoftwareComputerWhereInput";
export declare class GroupBySoftwareComputerArgs {
    where?: SoftwareComputerWhereInput | undefined;
    orderBy?: SoftwareComputerOrderByWithAggregationInput[] | undefined;
    by: Array<"id_softwarecomputer" | "operatingsystem" | "license_so" | "user_anydesk" | "pass_anydesk" | "ip" | "user_domain" | "pass_domain" | "user_admin" | "pass_admin" | "user_local" | "pass_local" | "architecture">;
    having?: SoftwareComputerScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
