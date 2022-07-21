import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ProductUpdateManyWithoutLocationInput } from "../inputs/ProductUpdateManyWithoutLocationInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class LocationUpdateWithoutComputerInput {
    internal_code?: IntFieldUpdateOperationsInput | undefined;
    city?: StringFieldUpdateOperationsInput | undefined;
    job_name?: StringFieldUpdateOperationsInput | undefined;
    porduct?: ProductUpdateManyWithoutLocationInput | undefined;
}
