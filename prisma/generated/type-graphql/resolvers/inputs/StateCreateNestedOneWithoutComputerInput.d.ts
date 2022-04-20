import { StateCreateOrConnectWithoutComputerInput } from "../inputs/StateCreateOrConnectWithoutComputerInput";
import { StateCreateWithoutComputerInput } from "../inputs/StateCreateWithoutComputerInput";
import { StateWhereUniqueInput } from "../inputs/StateWhereUniqueInput";
export declare class StateCreateNestedOneWithoutComputerInput {
    create?: StateCreateWithoutComputerInput | undefined;
    connectOrCreate?: StateCreateOrConnectWithoutComputerInput | undefined;
    connect?: StateWhereUniqueInput | undefined;
}
