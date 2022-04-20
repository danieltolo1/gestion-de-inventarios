import { PartComputerCreateManyComputerInputEnvelope } from "../inputs/PartComputerCreateManyComputerInputEnvelope";
import { PartComputerCreateOrConnectWithoutComputerInput } from "../inputs/PartComputerCreateOrConnectWithoutComputerInput";
import { PartComputerCreateWithoutComputerInput } from "../inputs/PartComputerCreateWithoutComputerInput";
import { PartComputerWhereUniqueInput } from "../inputs/PartComputerWhereUniqueInput";
export declare class PartComputerCreateNestedManyWithoutComputerInput {
    create?: PartComputerCreateWithoutComputerInput[] | undefined;
    connectOrCreate?: PartComputerCreateOrConnectWithoutComputerInput[] | undefined;
    createMany?: PartComputerCreateManyComputerInputEnvelope | undefined;
    connect?: PartComputerWhereUniqueInput[] | undefined;
}
