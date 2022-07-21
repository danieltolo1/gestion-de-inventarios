import { ComputerUpdateManyWithoutLocationInput } from "../inputs/ComputerUpdateManyWithoutLocationInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class LocationUpdateWithoutPorductInput {
    internal_code?: IntFieldUpdateOperationsInput | undefined;
    city?: StringFieldUpdateOperationsInput | undefined;
    job_name?: StringFieldUpdateOperationsInput | undefined;
    computer?: ComputerUpdateManyWithoutLocationInput | undefined;
}
