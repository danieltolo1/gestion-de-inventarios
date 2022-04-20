import { PartComputerUpdateManyWithoutLocationInput } from "../inputs/PartComputerUpdateManyWithoutLocationInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class LocationUpdateInput {
    city?: StringFieldUpdateOperationsInput | undefined;
    job_name?: StringFieldUpdateOperationsInput | undefined;
    partComputer?: PartComputerUpdateManyWithoutLocationInput | undefined;
}
