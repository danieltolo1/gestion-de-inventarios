import { ComputerCreateNestedManyWithoutStateInput } from "../inputs/ComputerCreateNestedManyWithoutStateInput";
export declare class StateCreateWithoutProductInput {
    description: string;
    computer?: ComputerCreateNestedManyWithoutStateInput | undefined;
}
