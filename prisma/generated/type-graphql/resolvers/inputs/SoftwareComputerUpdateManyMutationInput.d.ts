import { EnumEnum_ArchitectureFieldUpdateOperationsInput } from "../inputs/EnumEnum_ArchitectureFieldUpdateOperationsInput";
import { EnumEnum_OperatigsystemFieldUpdateOperationsInput } from "../inputs/EnumEnum_OperatigsystemFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SoftwareComputerUpdateManyMutationInput {
    operatingsystem?: EnumEnum_OperatigsystemFieldUpdateOperationsInput | undefined;
    license_soA?: StringFieldUpdateOperationsInput | undefined;
    architecture?: EnumEnum_ArchitectureFieldUpdateOperationsInput | undefined;
}
