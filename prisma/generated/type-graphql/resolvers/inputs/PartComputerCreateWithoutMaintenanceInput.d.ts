import { ComputerCreateNestedOneWithoutPartComputerInput } from "../inputs/ComputerCreateNestedOneWithoutPartComputerInput";
import { LocationCreateNestedOneWithoutPartComputerInput } from "../inputs/LocationCreateNestedOneWithoutPartComputerInput";
import { ProductCreateNestedOneWithoutPartcomputerInput } from "../inputs/ProductCreateNestedOneWithoutPartcomputerInput";
export declare class PartComputerCreateWithoutMaintenanceInput {
    product: ProductCreateNestedOneWithoutPartcomputerInput;
    computer: ComputerCreateNestedOneWithoutPartComputerInput;
    location: LocationCreateNestedOneWithoutPartComputerInput;
    name_part?: string | undefined;
}
