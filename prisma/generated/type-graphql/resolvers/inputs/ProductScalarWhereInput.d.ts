import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ProductScalarWhereInput {
    AND?: ProductScalarWhereInput[] | undefined;
    OR?: ProductScalarWhereInput[] | undefined;
    NOT?: ProductScalarWhereInput[] | undefined;
    id_product?: IntFilter | undefined;
    internal_code?: StringFilter | undefined;
    serial_number?: StringNullableFilter | undefined;
    imei?: StringNullableFilter | undefined;
    observation?: StringNullableFilter | undefined;
    picture?: StringNullableFilter | undefined;
    model?: StringNullableFilter | undefined;
    product_typeId?: IntFilter | undefined;
    size?: StringNullableFilter | undefined;
    tecnology?: StringNullableFilter | undefined;
    conectivity?: StringNullableFilter | undefined;
    stateId?: IntFilter | undefined;
    historial?: StringFilter | undefined;
}
