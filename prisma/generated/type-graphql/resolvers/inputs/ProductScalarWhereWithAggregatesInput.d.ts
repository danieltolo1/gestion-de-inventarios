import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ProductScalarWhereWithAggregatesInput {
    AND?: ProductScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProductScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProductScalarWhereWithAggregatesInput[] | undefined;
    id_product?: IntWithAggregatesFilter | undefined;
    internal_code?: StringWithAggregatesFilter | undefined;
    serial_number?: StringNullableWithAggregatesFilter | undefined;
    imei?: StringNullableWithAggregatesFilter | undefined;
    observation?: StringNullableWithAggregatesFilter | undefined;
    picture?: StringNullableWithAggregatesFilter | undefined;
    model?: StringNullableWithAggregatesFilter | undefined;
    product_typeId?: IntWithAggregatesFilter | undefined;
    size?: StringNullableWithAggregatesFilter | undefined;
    tecnology?: StringNullableWithAggregatesFilter | undefined;
    conectivity?: StringNullableWithAggregatesFilter | undefined;
    stateId?: IntWithAggregatesFilter | undefined;
    locationId?: IntWithAggregatesFilter | undefined;
    historial?: StringWithAggregatesFilter | undefined;
}
