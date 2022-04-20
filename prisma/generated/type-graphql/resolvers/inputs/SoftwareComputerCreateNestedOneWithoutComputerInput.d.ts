import { SoftwareComputerCreateOrConnectWithoutComputerInput } from "../inputs/SoftwareComputerCreateOrConnectWithoutComputerInput";
import { SoftwareComputerCreateWithoutComputerInput } from "../inputs/SoftwareComputerCreateWithoutComputerInput";
import { SoftwareComputerWhereUniqueInput } from "../inputs/SoftwareComputerWhereUniqueInput";
export declare class SoftwareComputerCreateNestedOneWithoutComputerInput {
    create?: SoftwareComputerCreateWithoutComputerInput | undefined;
    connectOrCreate?: SoftwareComputerCreateOrConnectWithoutComputerInput | undefined;
    connect?: SoftwareComputerWhereUniqueInput | undefined;
}
