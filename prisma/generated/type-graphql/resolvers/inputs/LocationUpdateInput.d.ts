import { ComputerUpdateManyWithoutLocationInput } from "../inputs/ComputerUpdateManyWithoutLocationInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ProductUpdateManyWithoutLocationInput } from "../inputs/ProductUpdateManyWithoutLocationInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class LocationUpdateInput {
    internal_code?: IntFieldUpdateOperationsInput | undefined;
    city?: StringFieldUpdateOperationsInput | undefined;
    job_name?: StringFieldUpdateOperationsInput | undefined;
    computer?: ComputerUpdateManyWithoutLocationInput | undefined;
    porduct?: ProductUpdateManyWithoutLocationInput | undefined;
}
