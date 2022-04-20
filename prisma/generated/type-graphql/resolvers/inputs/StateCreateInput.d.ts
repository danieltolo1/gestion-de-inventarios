import { ComputerCreateNestedManyWithoutStateInput } from "../inputs/ComputerCreateNestedManyWithoutStateInput";
import { ProductCreateNestedManyWithoutStateInput } from "../inputs/ProductCreateNestedManyWithoutStateInput";
export declare class StateCreateInput {
    description: string;
    product?: ProductCreateNestedManyWithoutStateInput | undefined;
    computer?: ComputerCreateNestedManyWithoutStateInput | undefined;
}
