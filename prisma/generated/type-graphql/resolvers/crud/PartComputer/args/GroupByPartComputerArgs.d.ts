import { PartComputerOrderByWithAggregationInput } from "../../../inputs/PartComputerOrderByWithAggregationInput";
import { PartComputerScalarWhereWithAggregatesInput } from "../../../inputs/PartComputerScalarWhereWithAggregatesInput";
import { PartComputerWhereInput } from "../../../inputs/PartComputerWhereInput";
export declare class GroupByPartComputerArgs {
    where?: PartComputerWhereInput | undefined;
    orderBy?: PartComputerOrderByWithAggregationInput[] | undefined;
    by: Array<"id_partComputer" | "productId" | "computerId" | "locationId" | "maintenanceId" | "name_part">;
    having?: PartComputerScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
