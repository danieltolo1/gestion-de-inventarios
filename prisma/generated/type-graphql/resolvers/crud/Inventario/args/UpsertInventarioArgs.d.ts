import { InventarioCreateInput } from "../../../inputs/InventarioCreateInput";
import { InventarioUpdateInput } from "../../../inputs/InventarioUpdateInput";
import { InventarioWhereUniqueInput } from "../../../inputs/InventarioWhereUniqueInput";
export declare class UpsertInventarioArgs {
    where: InventarioWhereUniqueInput;
    create: InventarioCreateInput;
    update: InventarioUpdateInput;
}
