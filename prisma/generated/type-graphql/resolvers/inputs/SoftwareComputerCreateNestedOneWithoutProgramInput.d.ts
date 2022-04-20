import { SoftwareComputerCreateOrConnectWithoutProgramInput } from "../inputs/SoftwareComputerCreateOrConnectWithoutProgramInput";
import { SoftwareComputerCreateWithoutProgramInput } from "../inputs/SoftwareComputerCreateWithoutProgramInput";
import { SoftwareComputerWhereUniqueInput } from "../inputs/SoftwareComputerWhereUniqueInput";
export declare class SoftwareComputerCreateNestedOneWithoutProgramInput {
    create?: SoftwareComputerCreateWithoutProgramInput | undefined;
    connectOrCreate?: SoftwareComputerCreateOrConnectWithoutProgramInput | undefined;
    connect?: SoftwareComputerWhereUniqueInput | undefined;
}
