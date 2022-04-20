import { UserCreateOrConnectWithoutMantenanceInput } from "../inputs/UserCreateOrConnectWithoutMantenanceInput";
import { UserCreateWithoutMantenanceInput } from "../inputs/UserCreateWithoutMantenanceInput";
import { UserUpdateWithoutMantenanceInput } from "../inputs/UserUpdateWithoutMantenanceInput";
import { UserUpsertWithoutMantenanceInput } from "../inputs/UserUpsertWithoutMantenanceInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutMantenanceInput {
    create?: UserCreateWithoutMantenanceInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutMantenanceInput | undefined;
    upsert?: UserUpsertWithoutMantenanceInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutMantenanceInput | undefined;
}
