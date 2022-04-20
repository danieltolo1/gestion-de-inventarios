import { Product_TypeAvgAggregate } from "../outputs/Product_TypeAvgAggregate";
import { Product_TypeCountAggregate } from "../outputs/Product_TypeCountAggregate";
import { Product_TypeMaxAggregate } from "../outputs/Product_TypeMaxAggregate";
import { Product_TypeMinAggregate } from "../outputs/Product_TypeMinAggregate";
import { Product_TypeSumAggregate } from "../outputs/Product_TypeSumAggregate";
export declare class AggregateProduct_Type {
    _count: Product_TypeCountAggregate | null;
    _avg: Product_TypeAvgAggregate | null;
    _sum: Product_TypeSumAggregate | null;
    _min: Product_TypeMinAggregate | null;
    _max: Product_TypeMaxAggregate | null;
}
