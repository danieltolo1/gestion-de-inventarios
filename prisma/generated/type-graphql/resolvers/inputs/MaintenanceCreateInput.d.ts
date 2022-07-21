import { ComputerCreateNestedOneWithoutMaintenanceInput } from "../inputs/ComputerCreateNestedOneWithoutMaintenanceInput";
import { ProductCreateNestedManyWithoutMaintenanceInput } from "../inputs/ProductCreateNestedManyWithoutMaintenanceInput";
import { UserCreateNestedOneWithoutMantenanceInput } from "../inputs/UserCreateNestedOneWithoutMantenanceInput";
export declare class MaintenanceCreateInput {
    date_maintenance?: Date | undefined;
    jworkerNameFirm?: string | undefined;
    user: UserCreateNestedOneWithoutMantenanceInput;
    computer: ComputerCreateNestedOneWithoutMaintenanceInput;
    product?: ProductCreateNestedManyWithoutMaintenanceInput | undefined;
    observation?: string | undefined;
}
