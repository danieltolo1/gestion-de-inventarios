import { ProductAvgAggregate } from "../outputs/ProductAvgAggregate";
import { ProductCountAggregate } from "../outputs/ProductCountAggregate";
import { ProductMaxAggregate } from "../outputs/ProductMaxAggregate";
import { ProductMinAggregate } from "../outputs/ProductMinAggregate";
import { ProductSumAggregate } from "../outputs/ProductSumAggregate";
export declare class ProductGroupBy {
    id_product: number;
    internal_code: string;
    serial_number: string | null;
    imei: string | null;
    observation: string | null;
    picture: string | null;
    model: string | null;
    product_typeId: number;
    size: string | null;
    tecnology: string | null;
    conectivity: string | null;
    stateId: number;
    historial: string;
    _count: ProductCountAggregate | null;
    _avg: ProductAvgAggregate | null;
    _sum: ProductSumAggregate | null;
    _min: ProductMinAggregate | null;
    _max: ProductMaxAggregate | null;
}
