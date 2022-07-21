import { MaintenanceOrderByWithAggregationInput } from "../../../inputs/MaintenanceOrderByWithAggregationInput";
import { MaintenanceScalarWhereWithAggregatesInput } from "../../../inputs/MaintenanceScalarWhereWithAggregatesInput";
import { MaintenanceWhereInput } from "../../../inputs/MaintenanceWhereInput";
export declare class GroupByMaintenanceArgs {
    where?: MaintenanceWhereInput | undefined;
    orderBy?: MaintenanceOrderByWithAggregationInput[] | undefined;
    by: Array<"id_maintenance" | "date_maintenance" | "jworkerNameFirm" | "userId" | "computerId" | "observation">;
    having?: MaintenanceScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
