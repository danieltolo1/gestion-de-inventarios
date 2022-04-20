import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProgramUpdateManyMutationInput {
    name_program?: StringFieldUpdateOperationsInput | undefined;
    version_program?: NullableStringFieldUpdateOperationsInput | undefined;
    license_program?: NullableStringFieldUpdateOperationsInput | undefined;
}
