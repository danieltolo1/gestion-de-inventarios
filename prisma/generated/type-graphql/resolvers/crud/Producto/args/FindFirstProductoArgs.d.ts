import { ProductoOrderByWithRelationInput } from "../../../inputs/ProductoOrderByWithRelationInput";
import { ProductoWhereInput } from "../../../inputs/ProductoWhereInput";
import { ProductoWhereUniqueInput } from "../../../inputs/ProductoWhereUniqueInput";
export declare class FindFirstProductoArgs {
    where?: ProductoWhereInput | undefined;
    orderBy?: ProductoOrderByWithRelationInput[] | undefined;
    cursor?: ProductoWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "nombre" | "foto"> | undefined;
}
