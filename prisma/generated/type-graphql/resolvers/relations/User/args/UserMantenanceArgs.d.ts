import { MaintenanceOrderByWithRelationInput } from "../../../inputs/MaintenanceOrderByWithRelationInput";
import { MaintenanceWhereInput } from "../../../inputs/MaintenanceWhereInput";
import { MaintenanceWhereUniqueInput } from "../../../inputs/MaintenanceWhereUniqueInput";
export declare class UserMantenanceArgs {
    where?: MaintenanceWhereInput | undefined;
    orderBy?: MaintenanceOrderByWithRelationInput[] | undefined;
    cursor?: MaintenanceWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id_maintenance" | "date_maintenance" | "jworkerNameFirm" | "userId" | "computerId" | "observation"> | undefined;
}
