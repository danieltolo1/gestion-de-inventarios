import { UserCreateOrConnectWithoutMovimientosInput } from "../inputs/UserCreateOrConnectWithoutMovimientosInput";
import { UserCreateWithoutMovimientosInput } from "../inputs/UserCreateWithoutMovimientosInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutMovimientosInput {
    create?: UserCreateWithoutMovimientosInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutMovimientosInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
