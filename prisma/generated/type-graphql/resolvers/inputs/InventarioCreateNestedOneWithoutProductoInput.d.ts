import { InventarioCreateOrConnectWithoutProductoInput } from "../inputs/InventarioCreateOrConnectWithoutProductoInput";
import { InventarioCreateWithoutProductoInput } from "../inputs/InventarioCreateWithoutProductoInput";
import { InventarioWhereUniqueInput } from "../inputs/InventarioWhereUniqueInput";
export declare class InventarioCreateNestedOneWithoutProductoInput {
    create?: InventarioCreateWithoutProductoInput | undefined;
    connectOrCreate?: InventarioCreateOrConnectWithoutProductoInput | undefined;
    connect?: InventarioWhereUniqueInput | undefined;
}
