import { MovimientoInventarioCreateManyInventarioInputEnvelope } from "../inputs/MovimientoInventarioCreateManyInventarioInputEnvelope";
import { MovimientoInventarioCreateOrConnectWithoutInventarioInput } from "../inputs/MovimientoInventarioCreateOrConnectWithoutInventarioInput";
import { MovimientoInventarioCreateWithoutInventarioInput } from "../inputs/MovimientoInventarioCreateWithoutInventarioInput";
import { MovimientoInventarioScalarWhereInput } from "../inputs/MovimientoInventarioScalarWhereInput";
import { MovimientoInventarioUpdateManyWithWhereWithoutInventarioInput } from "../inputs/MovimientoInventarioUpdateManyWithWhereWithoutInventarioInput";
import { MovimientoInventarioUpdateWithWhereUniqueWithoutInventarioInput } from "../inputs/MovimientoInventarioUpdateWithWhereUniqueWithoutInventarioInput";
import { MovimientoInventarioUpsertWithWhereUniqueWithoutInventarioInput } from "../inputs/MovimientoInventarioUpsertWithWhereUniqueWithoutInventarioInput";
import { MovimientoInventarioWhereUniqueInput } from "../inputs/MovimientoInventarioWhereUniqueInput";
export declare class MovimientoInventarioUpdateManyWithoutInventarioInput {
    create?: MovimientoInventarioCreateWithoutInventarioInput[] | undefined;
    connectOrCreate?: MovimientoInventarioCreateOrConnectWithoutInventarioInput[] | undefined;
    upsert?: MovimientoInventarioUpsertWithWhereUniqueWithoutInventarioInput[] | undefined;
    createMany?: MovimientoInventarioCreateManyInventarioInputEnvelope | undefined;
    set?: MovimientoInventarioWhereUniqueInput[] | undefined;
    disconnect?: MovimientoInventarioWhereUniqueInput[] | undefined;
    delete?: MovimientoInventarioWhereUniqueInput[] | undefined;
    connect?: MovimientoInventarioWhereUniqueInput[] | undefined;
    update?: MovimientoInventarioUpdateWithWhereUniqueWithoutInventarioInput[] | undefined;
    updateMany?: MovimientoInventarioUpdateManyWithWhereWithoutInventarioInput[] | undefined;
    deleteMany?: MovimientoInventarioScalarWhereInput[] | undefined;
}
