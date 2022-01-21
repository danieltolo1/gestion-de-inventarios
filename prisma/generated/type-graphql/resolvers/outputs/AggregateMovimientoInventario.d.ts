import { MovimientoInventarioAvgAggregate } from "../outputs/MovimientoInventarioAvgAggregate";
import { MovimientoInventarioCountAggregate } from "../outputs/MovimientoInventarioCountAggregate";
import { MovimientoInventarioMaxAggregate } from "../outputs/MovimientoInventarioMaxAggregate";
import { MovimientoInventarioMinAggregate } from "../outputs/MovimientoInventarioMinAggregate";
import { MovimientoInventarioSumAggregate } from "../outputs/MovimientoInventarioSumAggregate";
export declare class AggregateMovimientoInventario {
    _count: MovimientoInventarioCountAggregate | null;
    _avg: MovimientoInventarioAvgAggregate | null;
    _sum: MovimientoInventarioSumAggregate | null;
    _min: MovimientoInventarioMinAggregate | null;
    _max: MovimientoInventarioMaxAggregate | null;
}
