import { MovimientoInventarioCreateManyInventarioInputEnvelope } from "../inputs/MovimientoInventarioCreateManyInventarioInputEnvelope";
import { MovimientoInventarioCreateOrConnectWithoutInventarioInput } from "../inputs/MovimientoInventarioCreateOrConnectWithoutInventarioInput";
import { MovimientoInventarioCreateWithoutInventarioInput } from "../inputs/MovimientoInventarioCreateWithoutInventarioInput";
import { MovimientoInventarioWhereUniqueInput } from "../inputs/MovimientoInventarioWhereUniqueInput";
export declare class MovimientoInventarioCreateNestedManyWithoutInventarioInput {
    create?: MovimientoInventarioCreateWithoutInventarioInput[] | undefined;
    connectOrCreate?: MovimientoInventarioCreateOrConnectWithoutInventarioInput[] | undefined;
    createMany?: MovimientoInventarioCreateManyInventarioInputEnvelope | undefined;
    connect?: MovimientoInventarioWhereUniqueInput[] | undefined;
}
