import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class PartComputerScalarWhereInput {
    AND?: PartComputerScalarWhereInput[] | undefined;
    OR?: PartComputerScalarWhereInput[] | undefined;
    NOT?: PartComputerScalarWhereInput[] | undefined;
    id_partComputer?: IntFilter | undefined;
    productId?: IntFilter | undefined;
    computerId?: IntFilter | undefined;
    locationId?: IntFilter | undefined;
    maintenanceId?: IntFilter | undefined;
    name_part?: StringNullableFilter | undefined;
}
