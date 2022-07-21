import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class MaintenanceScalarWhereInput {
    AND?: MaintenanceScalarWhereInput[] | undefined;
    OR?: MaintenanceScalarWhereInput[] | undefined;
    NOT?: MaintenanceScalarWhereInput[] | undefined;
    id_maintenance?: IntFilter | undefined;
    date_maintenance?: DateTimeNullableFilter | undefined;
    jworkerNameFirm?: StringNullableFilter | undefined;
    userId?: StringFilter | undefined;
    computerId?: IntFilter | undefined;
    observation?: StringNullableFilter | undefined;
}
