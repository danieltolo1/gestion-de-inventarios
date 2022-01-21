import { MovimientoInventarioAvgOrderByAggregateInput } from "../inputs/MovimientoInventarioAvgOrderByAggregateInput";
import { MovimientoInventarioCountOrderByAggregateInput } from "../inputs/MovimientoInventarioCountOrderByAggregateInput";
import { MovimientoInventarioMaxOrderByAggregateInput } from "../inputs/MovimientoInventarioMaxOrderByAggregateInput";
import { MovimientoInventarioMinOrderByAggregateInput } from "../inputs/MovimientoInventarioMinOrderByAggregateInput";
import { MovimientoInventarioSumOrderByAggregateInput } from "../inputs/MovimientoInventarioSumOrderByAggregateInput";
export declare class MovimientoInventarioOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    inventarioId?: "asc" | "desc" | undefined;
    cantidad?: "asc" | "desc" | undefined;
    tipoMovimiento?: "asc" | "desc" | undefined;
    fecha?: "asc" | "desc" | undefined;
    usuarioId?: "asc" | "desc" | undefined;
    _count?: MovimientoInventarioCountOrderByAggregateInput | undefined;
    _avg?: MovimientoInventarioAvgOrderByAggregateInput | undefined;
    _max?: MovimientoInventarioMaxOrderByAggregateInput | undefined;
    _min?: MovimientoInventarioMinOrderByAggregateInput | undefined;
    _sum?: MovimientoInventarioSumOrderByAggregateInput | undefined;
}
