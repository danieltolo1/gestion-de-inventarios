import { EnumEnum_ArchitectureFieldUpdateOperationsInput } from "../inputs/EnumEnum_ArchitectureFieldUpdateOperationsInput";
import { EnumEnum_OperatigsystemFieldUpdateOperationsInput } from "../inputs/EnumEnum_OperatigsystemFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProgramUpdateManyWithoutSoftwarecomputerInput } from "../inputs/ProgramUpdateManyWithoutSoftwarecomputerInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SoftwareComputerUpdateWithoutComputerInput {
    operatingsystem?: EnumEnum_OperatigsystemFieldUpdateOperationsInput | undefined;
    license_so?: StringFieldUpdateOperationsInput | undefined;
    user_anydesk?: NullableStringFieldUpdateOperationsInput | undefined;
    pass_anydesk?: NullableStringFieldUpdateOperationsInput | undefined;
    ip?: StringFieldUpdateOperationsInput | undefined;
    user_domain?: NullableStringFieldUpdateOperationsInput | undefined;
    pass_domain?: NullableStringFieldUpdateOperationsInput | undefined;
    user_admin?: NullableStringFieldUpdateOperationsInput | undefined;
    pass_admin?: NullableStringFieldUpdateOperationsInput | undefined;
    user_local?: NullableStringFieldUpdateOperationsInput | undefined;
    pass_local?: NullableStringFieldUpdateOperationsInput | undefined;
    architecture?: EnumEnum_ArchitectureFieldUpdateOperationsInput | undefined;
    program?: ProgramUpdateManyWithoutSoftwarecomputerInput | undefined;
}
