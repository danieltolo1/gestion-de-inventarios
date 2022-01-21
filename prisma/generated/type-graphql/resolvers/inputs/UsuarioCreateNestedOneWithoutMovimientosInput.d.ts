import { UsuarioCreateOrConnectWithoutMovimientosInput } from "../inputs/UsuarioCreateOrConnectWithoutMovimientosInput";
import { UsuarioCreateWithoutMovimientosInput } from "../inputs/UsuarioCreateWithoutMovimientosInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";
export declare class UsuarioCreateNestedOneWithoutMovimientosInput {
    create?: UsuarioCreateWithoutMovimientosInput | undefined;
    connectOrCreate?: UsuarioCreateOrConnectWithoutMovimientosInput | undefined;
    connect?: UsuarioWhereUniqueInput | undefined;
}
