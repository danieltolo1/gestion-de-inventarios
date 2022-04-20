import { Product_TypeOrderByWithRelationInput } from "../../../inputs/Product_TypeOrderByWithRelationInput";
import { Product_TypeWhereInput } from "../../../inputs/Product_TypeWhereInput";
import { Product_TypeWhereUniqueInput } from "../../../inputs/Product_TypeWhereUniqueInput";
export declare class FindFirstProduct_TypeArgs {
    where?: Product_TypeWhereInput | undefined;
    orderBy?: Product_TypeOrderByWithRelationInput[] | undefined;
    cursor?: Product_TypeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id_product_type" | "description"> | undefined;
}
