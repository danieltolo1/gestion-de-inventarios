import { PartComputerCreateNestedManyWithoutMaintenanceInput } from "../inputs/PartComputerCreateNestedManyWithoutMaintenanceInput";
import { UserCreateNestedOneWithoutMantenanceInput } from "../inputs/UserCreateNestedOneWithoutMantenanceInput";
export declare class MaintenanceCreateInput {
    date_maintenance?: Date | undefined;
    jworkerNameFirm?: string | undefined;
    user: UserCreateNestedOneWithoutMantenanceInput;
    partComputer?: PartComputerCreateNestedManyWithoutMaintenanceInput | undefined;
}
