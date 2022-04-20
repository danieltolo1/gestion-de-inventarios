import { Product_TypeAvgOrderByAggregateInput } from "../inputs/Product_TypeAvgOrderByAggregateInput";
import { Product_TypeCountOrderByAggregateInput } from "../inputs/Product_TypeCountOrderByAggregateInput";
import { Product_TypeMaxOrderByAggregateInput } from "../inputs/Product_TypeMaxOrderByAggregateInput";
import { Product_TypeMinOrderByAggregateInput } from "../inputs/Product_TypeMinOrderByAggregateInput";
import { Product_TypeSumOrderByAggregateInput } from "../inputs/Product_TypeSumOrderByAggregateInput";
export declare class Product_TypeOrderByWithAggregationInput {
    id_product_type?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    _count?: Product_TypeCountOrderByAggregateInput | undefined;
    _avg?: Product_TypeAvgOrderByAggregateInput | undefined;
    _max?: Product_TypeMaxOrderByAggregateInput | undefined;
    _min?: Product_TypeMinOrderByAggregateInput | undefined;
    _sum?: Product_TypeSumOrderByAggregateInput | undefined;
}
