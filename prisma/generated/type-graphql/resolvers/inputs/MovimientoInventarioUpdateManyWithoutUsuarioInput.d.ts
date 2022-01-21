import { MovimientoInventarioCreateManyUsuarioInputEnvelope } from "../inputs/MovimientoInventarioCreateManyUsuarioInputEnvelope";
import { MovimientoInventarioCreateOrConnectWithoutUsuarioInput } from "../inputs/MovimientoInventarioCreateOrConnectWithoutUsuarioInput";
import { MovimientoInventarioCreateWithoutUsuarioInput } from "../inputs/MovimientoInventarioCreateWithoutUsuarioInput";
import { MovimientoInventarioScalarWhereInput } from "../inputs/MovimientoInventarioScalarWhereInput";
import { MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput } from "../inputs/MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput";
import { MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput } from "../inputs/MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput";
import { MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput } from "../inputs/MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput";
import { MovimientoInventarioWhereUniqueInput } from "../inputs/MovimientoInventarioWhereUniqueInput";
export declare class MovimientoInventarioUpdateManyWithoutUsuarioInput {
    create?: MovimientoInventarioCreateWithoutUsuarioInput[] | undefined;
    connectOrCreate?: MovimientoInventarioCreateOrConnectWithoutUsuarioInput[] | undefined;
    upsert?: MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput[] | undefined;
    createMany?: MovimientoInventarioCreateManyUsuarioInputEnvelope | undefined;
    set?: MovimientoInventarioWhereUniqueInput[] | undefined;
    disconnect?: MovimientoInventarioWhereUniqueInput[] | undefined;
    delete?: MovimientoInventarioWhereUniqueInput[] | undefined;
    connect?: MovimientoInventarioWhereUniqueInput[] | undefined;
    update?: MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput[] | undefined;
    updateMany?: MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput[] | undefined;
    deleteMany?: MovimientoInventarioScalarWhereInput[] | undefined;
}
