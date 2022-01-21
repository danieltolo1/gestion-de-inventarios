import { MovimientoInventarioCreateManyUsuarioInputEnvelope } from "../inputs/MovimientoInventarioCreateManyUsuarioInputEnvelope";
import { MovimientoInventarioCreateOrConnectWithoutUsuarioInput } from "../inputs/MovimientoInventarioCreateOrConnectWithoutUsuarioInput";
import { MovimientoInventarioCreateWithoutUsuarioInput } from "../inputs/MovimientoInventarioCreateWithoutUsuarioInput";
import { MovimientoInventarioWhereUniqueInput } from "../inputs/MovimientoInventarioWhereUniqueInput";
export declare class MovimientoInventarioCreateNestedManyWithoutUsuarioInput {
    create?: MovimientoInventarioCreateWithoutUsuarioInput[] | undefined;
    connectOrCreate?: MovimientoInventarioCreateOrConnectWithoutUsuarioInput[] | undefined;
    createMany?: MovimientoInventarioCreateManyUsuarioInputEnvelope | undefined;
    connect?: MovimientoInventarioWhereUniqueInput[] | undefined;
}
