import { InventarioCreateOrConnectWithoutMovimientoInventarioInput } from "../inputs/InventarioCreateOrConnectWithoutMovimientoInventarioInput";
import { InventarioCreateWithoutMovimientoInventarioInput } from "../inputs/InventarioCreateWithoutMovimientoInventarioInput";
import { InventarioUpdateWithoutMovimientoInventarioInput } from "../inputs/InventarioUpdateWithoutMovimientoInventarioInput";
import { InventarioUpsertWithoutMovimientoInventarioInput } from "../inputs/InventarioUpsertWithoutMovimientoInventarioInput";
import { InventarioWhereUniqueInput } from "../inputs/InventarioWhereUniqueInput";
export declare class InventarioUpdateOneRequiredWithoutMovimientoInventarioInput {
    create?: InventarioCreateWithoutMovimientoInventarioInput | undefined;
    connectOrCreate?: InventarioCreateOrConnectWithoutMovimientoInventarioInput | undefined;
    upsert?: InventarioUpsertWithoutMovimientoInventarioInput | undefined;
    connect?: InventarioWhereUniqueInput | undefined;
    update?: InventarioUpdateWithoutMovimientoInventarioInput | undefined;
}
