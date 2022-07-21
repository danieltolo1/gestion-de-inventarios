import { ProgramCreateOrConnectWithoutComputerInput } from "../inputs/ProgramCreateOrConnectWithoutComputerInput";
import { ProgramCreateWithoutComputerInput } from "../inputs/ProgramCreateWithoutComputerInput";
import { ProgramWhereUniqueInput } from "../inputs/ProgramWhereUniqueInput";
export declare class ProgramCreateNestedManyWithoutComputerInput {
    create?: ProgramCreateWithoutComputerInput[] | undefined;
    connectOrCreate?: ProgramCreateOrConnectWithoutComputerInput[] | undefined;
    connect?: ProgramWhereUniqueInput[] | undefined;
}
