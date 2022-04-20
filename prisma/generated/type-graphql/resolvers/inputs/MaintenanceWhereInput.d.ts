import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PartComputerListRelationFilter } from "../inputs/PartComputerListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class MaintenanceWhereInput {
    AND?: MaintenanceWhereInput[] | undefined;
    OR?: MaintenanceWhereInput[] | undefined;
    NOT?: MaintenanceWhereInput[] | undefined;
    id_maintenance?: IntFilter | undefined;
    date_maintenance?: DateTimeNullableFilter | undefined;
    jworkerNameFirm?: StringNullableFilter | undefined;
    user?: UserRelationFilter | undefined;
    userId?: StringFilter | undefined;
    partComputer?: PartComputerListRelationFilter | undefined;
}
