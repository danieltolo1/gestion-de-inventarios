import { ProductCreateNestedManyWithoutMaintenanceInput } from "../inputs/ProductCreateNestedManyWithoutMaintenanceInput";
import { UserCreateNestedOneWithoutMantenanceInput } from "../inputs/UserCreateNestedOneWithoutMantenanceInput";
export declare class MaintenanceCreateWithoutComputerInput {
    date_maintenance?: Date | undefined;
    jworkerNameFirm?: string | undefined;
    user: UserCreateNestedOneWithoutMantenanceInput;
    product?: ProductCreateNestedManyWithoutMaintenanceInput | undefined;
    observation?: string | undefined;
}
