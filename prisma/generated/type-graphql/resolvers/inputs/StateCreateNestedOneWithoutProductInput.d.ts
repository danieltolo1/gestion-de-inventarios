import { StateCreateOrConnectWithoutProductInput } from "../inputs/StateCreateOrConnectWithoutProductInput";
import { StateCreateWithoutProductInput } from "../inputs/StateCreateWithoutProductInput";
import { StateWhereUniqueInput } from "../inputs/StateWhereUniqueInput";
export declare class StateCreateNestedOneWithoutProductInput {
    create?: StateCreateWithoutProductInput | undefined;
    connectOrCreate?: StateCreateOrConnectWithoutProductInput | undefined;
    connect?: StateWhereUniqueInput | undefined;
}
