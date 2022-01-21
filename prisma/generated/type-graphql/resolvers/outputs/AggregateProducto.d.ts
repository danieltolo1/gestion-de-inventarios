import { ProductoCountAggregate } from "../outputs/ProductoCountAggregate";
import { ProductoMaxAggregate } from "../outputs/ProductoMaxAggregate";
import { ProductoMinAggregate } from "../outputs/ProductoMinAggregate";
export declare class AggregateProducto {
    _count: ProductoCountAggregate | null;
    _min: ProductoMinAggregate | null;
    _max: ProductoMaxAggregate | null;
}
