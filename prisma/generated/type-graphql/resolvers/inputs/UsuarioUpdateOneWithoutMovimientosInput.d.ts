import { UsuarioCreateOrConnectWithoutMovimientosInput } from "../inputs/UsuarioCreateOrConnectWithoutMovimientosInput";
import { UsuarioCreateWithoutMovimientosInput } from "../inputs/UsuarioCreateWithoutMovimientosInput";
import { UsuarioUpdateWithoutMovimientosInput } from "../inputs/UsuarioUpdateWithoutMovimientosInput";
import { UsuarioUpsertWithoutMovimientosInput } from "../inputs/UsuarioUpsertWithoutMovimientosInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";
export declare class UsuarioUpdateOneWithoutMovimientosInput {
    create?: UsuarioCreateWithoutMovimientosInput | undefined;
    connectOrCreate?: UsuarioCreateOrConnectWithoutMovimientosInput | undefined;
    upsert?: UsuarioUpsertWithoutMovimientosInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: UsuarioWhereUniqueInput | undefined;
    update?: UsuarioUpdateWithoutMovimientosInput | undefined;
}
