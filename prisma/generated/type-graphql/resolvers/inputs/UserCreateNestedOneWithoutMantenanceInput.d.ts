import { UserCreateOrConnectWithoutMantenanceInput } from "../inputs/UserCreateOrConnectWithoutMantenanceInput";
import { UserCreateWithoutMantenanceInput } from "../inputs/UserCreateWithoutMantenanceInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutMantenanceInput {
    create?: UserCreateWithoutMantenanceInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutMantenanceInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
