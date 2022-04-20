import { IntFilter } from "../inputs/IntFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class Product_TypeWhereInput {
    AND?: Product_TypeWhereInput[] | undefined;
    OR?: Product_TypeWhereInput[] | undefined;
    NOT?: Product_TypeWhereInput[] | undefined;
    id_product_type?: IntFilter | undefined;
    product?: ProductListRelationFilter | undefined;
    description?: StringFilter | undefined;
}
