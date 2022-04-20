import { ComputerUpdateManyWithoutStateInput } from "../inputs/ComputerUpdateManyWithoutStateInput";
import { ProductUpdateManyWithoutStateInput } from "../inputs/ProductUpdateManyWithoutStateInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class StateUpdateInput {
    description?: StringFieldUpdateOperationsInput | undefined;
    product?: ProductUpdateManyWithoutStateInput | undefined;
    computer?: ComputerUpdateManyWithoutStateInput | undefined;
}
