import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class Product_TypeScalarWhereWithAggregatesInput {
    AND?: Product_TypeScalarWhereWithAggregatesInput[] | undefined;
    OR?: Product_TypeScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Product_TypeScalarWhereWithAggregatesInput[] | undefined;
    id_product_type?: IntWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
}
