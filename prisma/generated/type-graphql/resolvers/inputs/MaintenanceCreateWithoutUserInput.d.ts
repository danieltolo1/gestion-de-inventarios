import { PartComputerCreateNestedManyWithoutMaintenanceInput } from "../inputs/PartComputerCreateNestedManyWithoutMaintenanceInput";
export declare class MaintenanceCreateWithoutUserInput {
    date_maintenance?: Date | undefined;
    jworkerNameFirm?: string | undefined;
    partComputer?: PartComputerCreateNestedManyWithoutMaintenanceInput | undefined;
}
