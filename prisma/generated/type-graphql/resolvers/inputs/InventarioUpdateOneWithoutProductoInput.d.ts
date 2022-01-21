import { InventarioCreateOrConnectWithoutProductoInput } from "../inputs/InventarioCreateOrConnectWithoutProductoInput";
import { InventarioCreateWithoutProductoInput } from "../inputs/InventarioCreateWithoutProductoInput";
import { InventarioUpdateWithoutProductoInput } from "../inputs/InventarioUpdateWithoutProductoInput";
import { InventarioUpsertWithoutProductoInput } from "../inputs/InventarioUpsertWithoutProductoInput";
import { InventarioWhereUniqueInput } from "../inputs/InventarioWhereUniqueInput";
export declare class InventarioUpdateOneWithoutProductoInput {
    create?: InventarioCreateWithoutProductoInput | undefined;
    connectOrCreate?: InventarioCreateOrConnectWithoutProductoInput | undefined;
    upsert?: InventarioUpsertWithoutProductoInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: InventarioWhereUniqueInput | undefined;
    update?: InventarioUpdateWithoutProductoInput | undefined;
}
