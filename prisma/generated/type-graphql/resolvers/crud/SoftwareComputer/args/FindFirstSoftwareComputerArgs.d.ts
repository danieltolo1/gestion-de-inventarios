import { SoftwareComputerOrderByWithRelationInput } from "../../../inputs/SoftwareComputerOrderByWithRelationInput";
import { SoftwareComputerWhereInput } from "../../../inputs/SoftwareComputerWhereInput";
import { SoftwareComputerWhereUniqueInput } from "../../../inputs/SoftwareComputerWhereUniqueInput";
export declare class FindFirstSoftwareComputerArgs {
    where?: SoftwareComputerWhereInput | undefined;
    orderBy?: SoftwareComputerOrderByWithRelationInput[] | undefined;
    cursor?: SoftwareComputerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id_softwarecomputer" | "operatingsystem" | "license_soA" | "architecture"> | undefined;
}
