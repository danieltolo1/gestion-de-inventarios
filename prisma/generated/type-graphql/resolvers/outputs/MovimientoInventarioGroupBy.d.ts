import { MovimientoInventarioAvgAggregate } from "../outputs/MovimientoInventarioAvgAggregate";
import { MovimientoInventarioCountAggregate } from "../outputs/MovimientoInventarioCountAggregate";
import { MovimientoInventarioMaxAggregate } from "../outputs/MovimientoInventarioMaxAggregate";
import { MovimientoInventarioMinAggregate } from "../outputs/MovimientoInventarioMinAggregate";
import { MovimientoInventarioSumAggregate } from "../outputs/MovimientoInventarioSumAggregate";
export declare class MovimientoInventarioGroupBy {
    id: string;
    inventarioId: string;
    cantidad: number;
    tipoMovimiento: "Entrada" | "Salida";
    fecha: Date;
    usuarioId: string | null;
    _count: MovimientoInventarioCountAggregate | null;
    _avg: MovimientoInventarioAvgAggregate | null;
    _sum: MovimientoInventarioSumAggregate | null;
    _min: MovimientoInventarioMinAggregate | null;
    _max: MovimientoInventarioMaxAggregate | null;
}
