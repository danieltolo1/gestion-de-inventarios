import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SoftwareComputerUpdateOneRequiredWithoutProgramInput } from "../inputs/SoftwareComputerUpdateOneRequiredWithoutProgramInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProgramUpdateInput {
    name_program?: StringFieldUpdateOperationsInput | undefined;
    version_program?: NullableStringFieldUpdateOperationsInput | undefined;
    license_program?: NullableStringFieldUpdateOperationsInput | undefined;
    softwarecomputer?: SoftwareComputerUpdateOneRequiredWithoutProgramInput | undefined;
}
