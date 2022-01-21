import { ProductoOrderByWithRelationInput } from "../../../inputs/ProductoOrderByWithRelationInput";
import { ProductoWhereInput } from "../../../inputs/ProductoWhereInput";
import { ProductoWhereUniqueInput } from "../../../inputs/ProductoWhereUniqueInput";
export declare class AggregateProductoArgs {
    where?: ProductoWhereInput | undefined;
    orderBy?: ProductoOrderByWithRelationInput[] | undefined;
    cursor?: ProductoWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
