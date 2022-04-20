import { SoftwareComputerOrderByWithRelationInput } from "../../../inputs/SoftwareComputerOrderByWithRelationInput";
import { SoftwareComputerWhereInput } from "../../../inputs/SoftwareComputerWhereInput";
import { SoftwareComputerWhereUniqueInput } from "../../../inputs/SoftwareComputerWhereUniqueInput";
export declare class FindFirstSoftwareComputerArgs {
    where?: SoftwareComputerWhereInput | undefined;
    orderBy?: SoftwareComputerOrderByWithRelationInput[] | undefined;
    cursor?: SoftwareComputerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id_softwarecomputer" | "operatingsystem" | "license_so" | "user_anydesk" | "pass_anydesk" | "ip" | "user_domain" | "pass_domain" | "user_admin" | "pass_admin" | "user_local" | "pass_local" | "architecture"> | undefined;
}
