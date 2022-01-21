import { ProductoCountAggregate } from "../outputs/ProductoCountAggregate";
import { ProductoMaxAggregate } from "../outputs/ProductoMaxAggregate";
import { ProductoMinAggregate } from "../outputs/ProductoMinAggregate";
export declare class ProductoGroupBy {
    id: string;
    nombre: string;
    foto: string;
    _count: ProductoCountAggregate | null;
    _min: ProductoMinAggregate | null;
    _max: ProductoMaxAggregate | null;
}
