import { LocationUpdateOneRequiredWithoutPartComputerInput } from "../inputs/LocationUpdateOneRequiredWithoutPartComputerInput";
import { MaintenanceUpdateOneRequiredWithoutPartComputerInput } from "../inputs/MaintenanceUpdateOneRequiredWithoutPartComputerInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductUpdateOneRequiredWithoutPartcomputerInput } from "../inputs/ProductUpdateOneRequiredWithoutPartcomputerInput";
export declare class PartComputerUpdateWithoutComputerInput {
    product?: ProductUpdateOneRequiredWithoutPartcomputerInput | undefined;
    location?: LocationUpdateOneRequiredWithoutPartComputerInput | undefined;
    maintenance?: MaintenanceUpdateOneRequiredWithoutPartComputerInput | undefined;
    name_part?: NullableStringFieldUpdateOperationsInput | undefined;
}
