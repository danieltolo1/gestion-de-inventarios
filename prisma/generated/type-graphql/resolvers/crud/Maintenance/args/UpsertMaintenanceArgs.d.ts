import { MaintenanceCreateInput } from "../../../inputs/MaintenanceCreateInput";
import { MaintenanceUpdateInput } from "../../../inputs/MaintenanceUpdateInput";
import { MaintenanceWhereUniqueInput } from "../../../inputs/MaintenanceWhereUniqueInput";
export declare class UpsertMaintenanceArgs {
    where: MaintenanceWhereUniqueInput;
    create: MaintenanceCreateInput;
    update: MaintenanceUpdateInput;
}
