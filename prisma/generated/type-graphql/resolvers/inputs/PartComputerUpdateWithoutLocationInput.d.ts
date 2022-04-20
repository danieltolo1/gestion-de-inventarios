import { ComputerUpdateOneRequiredWithoutPartComputerInput } from "../inputs/ComputerUpdateOneRequiredWithoutPartComputerInput";
import { MaintenanceUpdateOneRequiredWithoutPartComputerInput } from "../inputs/MaintenanceUpdateOneRequiredWithoutPartComputerInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductUpdateOneRequiredWithoutPartcomputerInput } from "../inputs/ProductUpdateOneRequiredWithoutPartcomputerInput";
export declare class PartComputerUpdateWithoutLocationInput {
    product?: ProductUpdateOneRequiredWithoutPartcomputerInput | undefined;
    computer?: ComputerUpdateOneRequiredWithoutPartComputerInput | undefined;
    maintenance?: MaintenanceUpdateOneRequiredWithoutPartComputerInput | undefined;
    name_part?: NullableStringFieldUpdateOperationsInput | undefined;
}
