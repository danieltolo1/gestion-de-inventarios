import { InventarioOrderByWithAggregationInput } from "../../../inputs/InventarioOrderByWithAggregationInput";
import { InventarioScalarWhereWithAggregatesInput } from "../../../inputs/InventarioScalarWhereWithAggregatesInput";
import { InventarioWhereInput } from "../../../inputs/InventarioWhereInput";
export declare class GroupByInventarioArgs {
    where?: InventarioWhereInput | undefined;
    orderBy?: InventarioOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "cantidad" | "productoId">;
    having?: InventarioScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
