import { PartComputerCreateOrConnectWithoutProductInput } from "../inputs/PartComputerCreateOrConnectWithoutProductInput";
import { PartComputerCreateWithoutProductInput } from "../inputs/PartComputerCreateWithoutProductInput";
import { PartComputerWhereUniqueInput } from "../inputs/PartComputerWhereUniqueInput";
export declare class PartComputerCreateNestedOneWithoutProductInput {
    create?: PartComputerCreateWithoutProductInput | undefined;
    connectOrCreate?: PartComputerCreateOrConnectWithoutProductInput | undefined;
    connect?: PartComputerWhereUniqueInput | undefined;
}
