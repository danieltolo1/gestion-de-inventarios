import { ComputerCreateNestedOneWithoutPartComputerInput } from "../inputs/ComputerCreateNestedOneWithoutPartComputerInput";
import { LocationCreateNestedOneWithoutPartComputerInput } from "../inputs/LocationCreateNestedOneWithoutPartComputerInput";
import { MaintenanceCreateNestedOneWithoutPartComputerInput } from "../inputs/MaintenanceCreateNestedOneWithoutPartComputerInput";
export declare class PartComputerCreateWithoutProductInput {
    computer: ComputerCreateNestedOneWithoutPartComputerInput;
    location: LocationCreateNestedOneWithoutPartComputerInput;
    maintenance: MaintenanceCreateNestedOneWithoutPartComputerInput;
    name_part?: string | undefined;
}
