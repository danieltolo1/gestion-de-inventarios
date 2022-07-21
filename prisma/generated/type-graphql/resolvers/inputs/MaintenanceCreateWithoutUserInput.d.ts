import { ComputerCreateNestedOneWithoutMaintenanceInput } from "../inputs/ComputerCreateNestedOneWithoutMaintenanceInput";
import { ProductCreateNestedManyWithoutMaintenanceInput } from "../inputs/ProductCreateNestedManyWithoutMaintenanceInput";
export declare class MaintenanceCreateWithoutUserInput {
    date_maintenance?: Date | undefined;
    jworkerNameFirm?: string | undefined;
    computer: ComputerCreateNestedOneWithoutMaintenanceInput;
    product?: ProductCreateNestedManyWithoutMaintenanceInput | undefined;
    observation?: string | undefined;
}
