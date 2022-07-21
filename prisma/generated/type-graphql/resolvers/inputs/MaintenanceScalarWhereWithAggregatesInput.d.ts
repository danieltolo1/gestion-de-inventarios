import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class MaintenanceScalarWhereWithAggregatesInput {
    AND?: MaintenanceScalarWhereWithAggregatesInput[] | undefined;
    OR?: MaintenanceScalarWhereWithAggregatesInput[] | undefined;
    NOT?: MaintenanceScalarWhereWithAggregatesInput[] | undefined;
    id_maintenance?: IntWithAggregatesFilter | undefined;
    date_maintenance?: DateTimeNullableWithAggregatesFilter | undefined;
    jworkerNameFirm?: StringNullableWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    computerId?: IntWithAggregatesFilter | undefined;
    observation?: StringNullableWithAggregatesFilter | undefined;
}
