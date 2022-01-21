import { InventarioAvgOrderByAggregateInput } from "../inputs/InventarioAvgOrderByAggregateInput";
import { InventarioCountOrderByAggregateInput } from "../inputs/InventarioCountOrderByAggregateInput";
import { InventarioMaxOrderByAggregateInput } from "../inputs/InventarioMaxOrderByAggregateInput";
import { InventarioMinOrderByAggregateInput } from "../inputs/InventarioMinOrderByAggregateInput";
import { InventarioSumOrderByAggregateInput } from "../inputs/InventarioSumOrderByAggregateInput";
export declare class InventarioOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    cantidad?: "asc" | "desc" | undefined;
    productoId?: "asc" | "desc" | undefined;
    _count?: InventarioCountOrderByAggregateInput | undefined;
    _avg?: InventarioAvgOrderByAggregateInput | undefined;
    _max?: InventarioMaxOrderByAggregateInput | undefined;
    _min?: InventarioMinOrderByAggregateInput | undefined;
    _sum?: InventarioSumOrderByAggregateInput | undefined;
}
