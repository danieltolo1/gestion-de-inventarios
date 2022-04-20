import { ProductAvgOrderByAggregateInput } from "../inputs/ProductAvgOrderByAggregateInput";
import { ProductCountOrderByAggregateInput } from "../inputs/ProductCountOrderByAggregateInput";
import { ProductMaxOrderByAggregateInput } from "../inputs/ProductMaxOrderByAggregateInput";
import { ProductMinOrderByAggregateInput } from "../inputs/ProductMinOrderByAggregateInput";
import { ProductSumOrderByAggregateInput } from "../inputs/ProductSumOrderByAggregateInput";
export declare class ProductOrderByWithAggregationInput {
    id_product?: "asc" | "desc" | undefined;
    internal_code?: "asc" | "desc" | undefined;
    serial_number?: "asc" | "desc" | undefined;
    imei?: "asc" | "desc" | undefined;
    observation?: "asc" | "desc" | undefined;
    picture?: "asc" | "desc" | undefined;
    model?: "asc" | "desc" | undefined;
    product_typeId?: "asc" | "desc" | undefined;
    size?: "asc" | "desc" | undefined;
    tecnology?: "asc" | "desc" | undefined;
    conectivity?: "asc" | "desc" | undefined;
    stateId?: "asc" | "desc" | undefined;
    historial?: "asc" | "desc" | undefined;
    _count?: ProductCountOrderByAggregateInput | undefined;
    _avg?: ProductAvgOrderByAggregateInput | undefined;
    _max?: ProductMaxOrderByAggregateInput | undefined;
    _min?: ProductMinOrderByAggregateInput | undefined;
    _sum?: ProductSumOrderByAggregateInput | undefined;
}
