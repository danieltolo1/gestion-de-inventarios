import { ProductOrderByWithAggregationInput } from "../../../inputs/ProductOrderByWithAggregationInput";
import { ProductScalarWhereWithAggregatesInput } from "../../../inputs/ProductScalarWhereWithAggregatesInput";
import { ProductWhereInput } from "../../../inputs/ProductWhereInput";
export declare class GroupByProductArgs {
    where?: ProductWhereInput | undefined;
    orderBy?: ProductOrderByWithAggregationInput[] | undefined;
    by: Array<"id_product" | "internal_code" | "serial_number" | "imei" | "observation" | "picture" | "model" | "product_typeId" | "size" | "tecnology" | "conectivity" | "stateId" | "historial">;
    having?: ProductScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
