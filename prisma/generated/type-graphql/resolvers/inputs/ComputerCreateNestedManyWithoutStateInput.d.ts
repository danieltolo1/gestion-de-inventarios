import { ComputerCreateManyStateInputEnvelope } from "../inputs/ComputerCreateManyStateInputEnvelope";
import { ComputerCreateOrConnectWithoutStateInput } from "../inputs/ComputerCreateOrConnectWithoutStateInput";
import { ComputerCreateWithoutStateInput } from "../inputs/ComputerCreateWithoutStateInput";
import { ComputerWhereUniqueInput } from "../inputs/ComputerWhereUniqueInput";
export declare class ComputerCreateNestedManyWithoutStateInput {
    create?: ComputerCreateWithoutStateInput[] | undefined;
    connectOrCreate?: ComputerCreateOrConnectWithoutStateInput[] | undefined;
    createMany?: ComputerCreateManyStateInputEnvelope | undefined;
    connect?: ComputerWhereUniqueInput[] | undefined;
}
