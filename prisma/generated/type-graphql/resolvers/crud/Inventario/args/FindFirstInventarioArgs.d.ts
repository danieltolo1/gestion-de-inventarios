import { InventarioOrderByWithRelationInput } from "../../../inputs/InventarioOrderByWithRelationInput";
import { InventarioWhereInput } from "../../../inputs/InventarioWhereInput";
import { InventarioWhereUniqueInput } from "../../../inputs/InventarioWhereUniqueInput";
export declare class FindFirstInventarioArgs {
    where?: InventarioWhereInput | undefined;
    orderBy?: InventarioOrderByWithRelationInput[] | undefined;
    cursor?: InventarioWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "cantidad" | "productoId"> | undefined;
}
