import { MovimientoInventarioOrderByWithAggregationInput } from "../../../inputs/MovimientoInventarioOrderByWithAggregationInput";
import { MovimientoInventarioScalarWhereWithAggregatesInput } from "../../../inputs/MovimientoInventarioScalarWhereWithAggregatesInput";
import { MovimientoInventarioWhereInput } from "../../../inputs/MovimientoInventarioWhereInput";
export declare class GroupByMovimientoInventarioArgs {
    where?: MovimientoInventarioWhereInput | undefined;
    orderBy?: MovimientoInventarioOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "inventarioId" | "cantidad" | "tipoMovimiento" | "fecha" | "usuarioId">;
    having?: MovimientoInventarioScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
