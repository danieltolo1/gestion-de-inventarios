import { InventarioAvgAggregate } from "../outputs/InventarioAvgAggregate";
import { InventarioCountAggregate } from "../outputs/InventarioCountAggregate";
import { InventarioMaxAggregate } from "../outputs/InventarioMaxAggregate";
import { InventarioMinAggregate } from "../outputs/InventarioMinAggregate";
import { InventarioSumAggregate } from "../outputs/InventarioSumAggregate";
export declare class InventarioGroupBy {
    id: string;
    cantidad: number;
    productoId: string;
    _count: InventarioCountAggregate | null;
    _avg: InventarioAvgAggregate | null;
    _sum: InventarioSumAggregate | null;
    _min: InventarioMinAggregate | null;
    _max: InventarioMaxAggregate | null;
}
