import { ProductoCountOrderByAggregateInput } from "../inputs/ProductoCountOrderByAggregateInput";
import { ProductoMaxOrderByAggregateInput } from "../inputs/ProductoMaxOrderByAggregateInput";
import { ProductoMinOrderByAggregateInput } from "../inputs/ProductoMinOrderByAggregateInput";
export declare class ProductoOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    nombre?: "asc" | "desc" | undefined;
    foto?: "asc" | "desc" | undefined;
    _count?: ProductoCountOrderByAggregateInput | undefined;
    _max?: ProductoMaxOrderByAggregateInput | undefined;
    _min?: ProductoMinOrderByAggregateInput | undefined;
}
