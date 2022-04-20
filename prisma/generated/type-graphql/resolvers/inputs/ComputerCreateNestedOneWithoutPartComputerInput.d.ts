import { ComputerCreateOrConnectWithoutPartComputerInput } from "../inputs/ComputerCreateOrConnectWithoutPartComputerInput";
import { ComputerCreateWithoutPartComputerInput } from "../inputs/ComputerCreateWithoutPartComputerInput";
import { ComputerWhereUniqueInput } from "../inputs/ComputerWhereUniqueInput";
export declare class ComputerCreateNestedOneWithoutPartComputerInput {
    create?: ComputerCreateWithoutPartComputerInput | undefined;
    connectOrCreate?: ComputerCreateOrConnectWithoutPartComputerInput | undefined;
    connect?: ComputerWhereUniqueInput | undefined;
}
