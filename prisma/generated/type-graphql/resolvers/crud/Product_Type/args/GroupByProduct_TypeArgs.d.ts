import { Product_TypeOrderByWithAggregationInput } from "../../../inputs/Product_TypeOrderByWithAggregationInput";
import { Product_TypeScalarWhereWithAggregatesInput } from "../../../inputs/Product_TypeScalarWhereWithAggregatesInput";
import { Product_TypeWhereInput } from "../../../inputs/Product_TypeWhereInput";
export declare class GroupByProduct_TypeArgs {
    where?: Product_TypeWhereInput | undefined;
    orderBy?: Product_TypeOrderByWithAggregationInput[] | undefined;
    by: Array<"id_product_type" | "description">;
    having?: Product_TypeScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
