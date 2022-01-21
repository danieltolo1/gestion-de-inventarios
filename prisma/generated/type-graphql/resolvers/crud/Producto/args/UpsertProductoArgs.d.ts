import { ProductoCreateInput } from "../../../inputs/ProductoCreateInput";
import { ProductoUpdateInput } from "../../../inputs/ProductoUpdateInput";
import { ProductoWhereUniqueInput } from "../../../inputs/ProductoWhereUniqueInput";
export declare class UpsertProductoArgs {
    where: ProductoWhereUniqueInput;
    create: ProductoCreateInput;
    update: ProductoUpdateInput;
}
