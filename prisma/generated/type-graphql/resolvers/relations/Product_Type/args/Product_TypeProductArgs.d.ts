import { ProductOrderByWithRelationInput } from "../../../inputs/ProductOrderByWithRelationInput";
import { ProductWhereInput } from "../../../inputs/ProductWhereInput";
import { ProductWhereUniqueInput } from "../../../inputs/ProductWhereUniqueInput";
export declare class Product_TypeProductArgs {
    where?: ProductWhereInput | undefined;
    orderBy?: ProductOrderByWithRelationInput[] | undefined;
    cursor?: ProductWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id_product" | "internal_code" | "serial_number" | "imei" | "observation" | "picture" | "model" | "product_typeId" | "size" | "tecnology" | "conectivity" | "stateId" | "locationId" | "historial"> | undefined;
}
