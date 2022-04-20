import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { FloatNullableWithAggregatesFilter } from "../inputs/FloatNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ComputerScalarWhereWithAggregatesInput {
    AND?: ComputerScalarWhereWithAggregatesInput[] | undefined;
    OR?: ComputerScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ComputerScalarWhereWithAggregatesInput[] | undefined;
    id_computer?: IntWithAggregatesFilter | undefined;
    buy_date?: DateTimeNullableWithAggregatesFilter | undefined;
    price?: FloatNullableWithAggregatesFilter | undefined;
    internal_code?: StringWithAggregatesFilter | undefined;
    serial_number?: StringWithAggregatesFilter | undefined;
    memory?: StringWithAggregatesFilter | undefined;
    hard_disk?: StringWithAggregatesFilter | undefined;
    processor?: StringWithAggregatesFilter | undefined;
    optical_unit?: BoolNullableWithAggregatesFilter | undefined;
    model?: StringWithAggregatesFilter | undefined;
    stateId?: IntWithAggregatesFilter | undefined;
    softwarecomputerId?: IntWithAggregatesFilter | undefined;
    observation?: StringNullableWithAggregatesFilter | undefined;
    historial?: StringNullableWithAggregatesFilter | undefined;
}
