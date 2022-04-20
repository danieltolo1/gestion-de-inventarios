import { UserCreateNestedOneWithoutMantenanceInput } from "../inputs/UserCreateNestedOneWithoutMantenanceInput";
export declare class MaintenanceCreateWithoutPartComputerInput {
    date_maintenance?: Date | undefined;
    jworkerNameFirm?: string | undefined;
    user: UserCreateNestedOneWithoutMantenanceInput;
}
