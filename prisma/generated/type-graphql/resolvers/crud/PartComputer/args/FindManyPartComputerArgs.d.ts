import { PartComputerOrderByWithRelationInput } from "../../../inputs/PartComputerOrderByWithRelationInput";
import { PartComputerWhereInput } from "../../../inputs/PartComputerWhereInput";
import { PartComputerWhereUniqueInput } from "../../../inputs/PartComputerWhereUniqueInput";
export declare class FindManyPartComputerArgs {
    where?: PartComputerWhereInput | undefined;
    orderBy?: PartComputerOrderByWithRelationInput[] | undefined;
    cursor?: PartComputerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id_partComputer" | "productId" | "computerId" | "locationId" | "maintenanceId" | "name_part"> | undefined;
}
