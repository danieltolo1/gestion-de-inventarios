import { PartComputerCreateManyLocationInputEnvelope } from "../inputs/PartComputerCreateManyLocationInputEnvelope";
import { PartComputerCreateOrConnectWithoutLocationInput } from "../inputs/PartComputerCreateOrConnectWithoutLocationInput";
import { PartComputerCreateWithoutLocationInput } from "../inputs/PartComputerCreateWithoutLocationInput";
import { PartComputerWhereUniqueInput } from "../inputs/PartComputerWhereUniqueInput";
export declare class PartComputerCreateNestedManyWithoutLocationInput {
    create?: PartComputerCreateWithoutLocationInput[] | undefined;
    connectOrCreate?: PartComputerCreateOrConnectWithoutLocationInput[] | undefined;
    createMany?: PartComputerCreateManyLocationInputEnvelope | undefined;
    connect?: PartComputerWhereUniqueInput[] | undefined;
}
