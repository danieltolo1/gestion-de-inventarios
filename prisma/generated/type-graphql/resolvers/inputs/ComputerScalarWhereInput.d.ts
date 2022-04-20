import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ComputerScalarWhereInput {
    AND?: ComputerScalarWhereInput[] | undefined;
    OR?: ComputerScalarWhereInput[] | undefined;
    NOT?: ComputerScalarWhereInput[] | undefined;
    id_computer?: IntFilter | undefined;
    buy_date?: DateTimeNullableFilter | undefined;
    price?: FloatNullableFilter | undefined;
    internal_code?: StringFilter | undefined;
    serial_number?: StringFilter | undefined;
    memory?: StringFilter | undefined;
    hard_disk?: StringFilter | undefined;
    processor?: StringFilter | undefined;
    optical_unit?: BoolNullableFilter | undefined;
    model?: StringFilter | undefined;
    stateId?: IntFilter | undefined;
    softwarecomputerId?: IntFilter | undefined;
    observation?: StringNullableFilter | undefined;
    historial?: StringNullableFilter | undefined;
}
