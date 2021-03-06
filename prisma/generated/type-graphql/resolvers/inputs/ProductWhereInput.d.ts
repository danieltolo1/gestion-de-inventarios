import { IntFilter } from "../inputs/IntFilter";
import { LocationRelationFilter } from "../inputs/LocationRelationFilter";
import { MaintenanceListRelationFilter } from "../inputs/MaintenanceListRelationFilter";
import { Product_TypeRelationFilter } from "../inputs/Product_TypeRelationFilter";
import { StateRelationFilter } from "../inputs/StateRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ProductWhereInput {
    AND?: ProductWhereInput[] | undefined;
    OR?: ProductWhereInput[] | undefined;
    NOT?: ProductWhereInput[] | undefined;
    id_product?: IntFilter | undefined;
    internal_code?: StringFilter | undefined;
    serial_number?: StringNullableFilter | undefined;
    imei?: StringNullableFilter | undefined;
    observation?: StringNullableFilter | undefined;
    picture?: StringNullableFilter | undefined;
    model?: StringNullableFilter | undefined;
    product_type?: Product_TypeRelationFilter | undefined;
    product_typeId?: IntFilter | undefined;
    size?: StringNullableFilter | undefined;
    tecnology?: StringNullableFilter | undefined;
    conectivity?: StringNullableFilter | undefined;
    state?: StateRelationFilter | undefined;
    stateId?: IntFilter | undefined;
    location?: LocationRelationFilter | undefined;
    locationId?: IntFilter | undefined;
    historial?: StringFilter | undefined;
    maintenance?: MaintenanceListRelationFilter | undefined;
}
