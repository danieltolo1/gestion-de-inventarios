import { ComputerCreateNestedOneWithoutMaintenanceInput } from "../inputs/ComputerCreateNestedOneWithoutMaintenanceInput";
import { UserCreateNestedOneWithoutMantenanceInput } from "../inputs/UserCreateNestedOneWithoutMantenanceInput";
export declare class MaintenanceCreateWithoutProductInput {
    date_maintenance?: Date | undefined;
    jworkerNameFirm?: string | undefined;
    user: UserCreateNestedOneWithoutMantenanceInput;
    computer: ComputerCreateNestedOneWithoutMaintenanceInput;
    observation?: string | undefined;
}
