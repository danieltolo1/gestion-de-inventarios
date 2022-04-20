import { ComputerCreateNestedOneWithoutPartComputerInput } from "../inputs/ComputerCreateNestedOneWithoutPartComputerInput";
import { LocationCreateNestedOneWithoutPartComputerInput } from "../inputs/LocationCreateNestedOneWithoutPartComputerInput";
import { MaintenanceCreateNestedOneWithoutPartComputerInput } from "../inputs/MaintenanceCreateNestedOneWithoutPartComputerInput";
import { ProductCreateNestedOneWithoutPartcomputerInput } from "../inputs/ProductCreateNestedOneWithoutPartcomputerInput";
export declare class PartComputerCreateInput {
    product: ProductCreateNestedOneWithoutPartcomputerInput;
    computer: ComputerCreateNestedOneWithoutPartComputerInput;
    location: LocationCreateNestedOneWithoutPartComputerInput;
    maintenance: MaintenanceCreateNestedOneWithoutPartComputerInput;
    name_part?: string | undefined;
}
