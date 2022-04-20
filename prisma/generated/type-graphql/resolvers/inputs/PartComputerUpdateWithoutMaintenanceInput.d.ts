import { ComputerUpdateOneRequiredWithoutPartComputerInput } from "../inputs/ComputerUpdateOneRequiredWithoutPartComputerInput";
import { LocationUpdateOneRequiredWithoutPartComputerInput } from "../inputs/LocationUpdateOneRequiredWithoutPartComputerInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductUpdateOneRequiredWithoutPartcomputerInput } from "../inputs/ProductUpdateOneRequiredWithoutPartcomputerInput";
export declare class PartComputerUpdateWithoutMaintenanceInput {
    product?: ProductUpdateOneRequiredWithoutPartcomputerInput | undefined;
    computer?: ComputerUpdateOneRequiredWithoutPartComputerInput | undefined;
    location?: LocationUpdateOneRequiredWithoutPartComputerInput | undefined;
    name_part?: NullableStringFieldUpdateOperationsInput | undefined;
}
