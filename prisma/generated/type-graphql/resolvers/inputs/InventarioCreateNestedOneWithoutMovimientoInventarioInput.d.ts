import { InventarioCreateOrConnectWithoutMovimientoInventarioInput } from "../inputs/InventarioCreateOrConnectWithoutMovimientoInventarioInput";
import { InventarioCreateWithoutMovimientoInventarioInput } from "../inputs/InventarioCreateWithoutMovimientoInventarioInput";
import { InventarioWhereUniqueInput } from "../inputs/InventarioWhereUniqueInput";
export declare class InventarioCreateNestedOneWithoutMovimientoInventarioInput {
    create?: InventarioCreateWithoutMovimientoInventarioInput | undefined;
    connectOrCreate?: InventarioCreateOrConnectWithoutMovimientoInventarioInput | undefined;
    connect?: InventarioWhereUniqueInput | undefined;
}
