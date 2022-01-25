import { UserCreateOrConnectWithoutMovimientosInput } from "../inputs/UserCreateOrConnectWithoutMovimientosInput";
import { UserCreateWithoutMovimientosInput } from "../inputs/UserCreateWithoutMovimientosInput";
import { UserUpdateWithoutMovimientosInput } from "../inputs/UserUpdateWithoutMovimientosInput";
import { UserUpsertWithoutMovimientosInput } from "../inputs/UserUpsertWithoutMovimientosInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutMovimientosInput {
    create?: UserCreateWithoutMovimientosInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutMovimientosInput | undefined;
    upsert?: UserUpsertWithoutMovimientosInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutMovimientosInput | undefined;
}
