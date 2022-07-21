import { ComputerCreateOrConnectWithoutProgramInput } from "../inputs/ComputerCreateOrConnectWithoutProgramInput";
import { ComputerCreateWithoutProgramInput } from "../inputs/ComputerCreateWithoutProgramInput";
import { ComputerWhereUniqueInput } from "../inputs/ComputerWhereUniqueInput";
export declare class ComputerCreateNestedManyWithoutProgramInput {
    create?: ComputerCreateWithoutProgramInput[] | undefined;
    connectOrCreate?: ComputerCreateOrConnectWithoutProgramInput[] | undefined;
    connect?: ComputerWhereUniqueInput[] | undefined;
}
