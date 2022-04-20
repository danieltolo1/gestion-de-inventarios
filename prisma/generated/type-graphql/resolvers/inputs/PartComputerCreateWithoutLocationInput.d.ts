import { ComputerCreateNestedOneWithoutPartComputerInput } from "../inputs/ComputerCreateNestedOneWithoutPartComputerInput";
import { MaintenanceCreateNestedOneWithoutPartComputerInput } from "../inputs/MaintenanceCreateNestedOneWithoutPartComputerInput";
import { ProductCreateNestedOneWithoutPartcomputerInput } from "../inputs/ProductCreateNestedOneWithoutPartcomputerInput";
export declare class PartComputerCreateWithoutLocationInput {
    product: ProductCreateNestedOneWithoutPartcomputerInput;
    computer: ComputerCreateNestedOneWithoutPartComputerInput;
    maintenance: MaintenanceCreateNestedOneWithoutPartComputerInput;
    name_part?: string | undefined;
}
