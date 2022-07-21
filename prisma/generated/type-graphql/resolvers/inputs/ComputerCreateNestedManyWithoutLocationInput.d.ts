import { ComputerCreateManyLocationInputEnvelope } from "../inputs/ComputerCreateManyLocationInputEnvelope";
import { ComputerCreateOrConnectWithoutLocationInput } from "../inputs/ComputerCreateOrConnectWithoutLocationInput";
import { ComputerCreateWithoutLocationInput } from "../inputs/ComputerCreateWithoutLocationInput";
import { ComputerWhereUniqueInput } from "../inputs/ComputerWhereUniqueInput";
export declare class ComputerCreateNestedManyWithoutLocationInput {
    create?: ComputerCreateWithoutLocationInput[] | undefined;
    connectOrCreate?: ComputerCreateOrConnectWithoutLocationInput[] | undefined;
    createMany?: ComputerCreateManyLocationInputEnvelope | undefined;
    connect?: ComputerWhereUniqueInput[] | undefined;
}
