import { ComputerCreateManySoftwarecomputerInputEnvelope } from "../inputs/ComputerCreateManySoftwarecomputerInputEnvelope";
import { ComputerCreateOrConnectWithoutSoftwarecomputerInput } from "../inputs/ComputerCreateOrConnectWithoutSoftwarecomputerInput";
import { ComputerCreateWithoutSoftwarecomputerInput } from "../inputs/ComputerCreateWithoutSoftwarecomputerInput";
import { ComputerWhereUniqueInput } from "../inputs/ComputerWhereUniqueInput";
export declare class ComputerCreateNestedManyWithoutSoftwarecomputerInput {
    create?: ComputerCreateWithoutSoftwarecomputerInput[] | undefined;
    connectOrCreate?: ComputerCreateOrConnectWithoutSoftwarecomputerInput[] | undefined;
    createMany?: ComputerCreateManySoftwarecomputerInputEnvelope | undefined;
    connect?: ComputerWhereUniqueInput[] | undefined;
}
