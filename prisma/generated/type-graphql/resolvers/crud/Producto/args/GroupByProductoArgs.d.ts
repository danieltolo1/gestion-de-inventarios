import { ProductoOrderByWithAggregationInput } from "../../../inputs/ProductoOrderByWithAggregationInput";
import { ProductoScalarWhereWithAggregatesInput } from "../../../inputs/ProductoScalarWhereWithAggregatesInput";
import { ProductoWhereInput } from "../../../inputs/ProductoWhereInput";
export declare class GroupByProductoArgs {
    where?: ProductoWhereInput | undefined;
    orderBy?: ProductoOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "nombre" | "foto">;
    having?: ProductoScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
