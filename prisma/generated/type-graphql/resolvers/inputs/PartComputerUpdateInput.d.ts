import { ComputerUpdateOneRequiredWithoutPartComputerInput } from "../inputs/ComputerUpdateOneRequiredWithoutPartComputerInput";
import { LocationUpdateOneRequiredWithoutPartComputerInput } from "../inputs/LocationUpdateOneRequiredWithoutPartComputerInput";
import { MaintenanceUpdateOneRequiredWithoutPartComputerInput } from "../inputs/MaintenanceUpdateOneRequiredWithoutPartComputerInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductUpdateOneRequiredWithoutPartcomputerInput } from "../inputs/ProductUpdateOneRequiredWithoutPartcomputerInput";
export declare class PartComputerUpdateInput {
    product?: ProductUpdateOneRequiredWithoutPartcomputerInput | undefined;
    computer?: ComputerUpdateOneRequiredWithoutPartComputerInput | undefined;
    location?: LocationUpdateOneRequiredWithoutPartComputerInput | undefined;
    maintenance?: MaintenanceUpdateOneRequiredWithoutPartComputerInput | undefined;
    name_part?: NullableStringFieldUpdateOperationsInput | undefined;
}
