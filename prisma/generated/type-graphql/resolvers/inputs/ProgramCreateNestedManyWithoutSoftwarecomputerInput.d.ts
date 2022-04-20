import { ProgramCreateManySoftwarecomputerInputEnvelope } from "../inputs/ProgramCreateManySoftwarecomputerInputEnvelope";
import { ProgramCreateOrConnectWithoutSoftwarecomputerInput } from "../inputs/ProgramCreateOrConnectWithoutSoftwarecomputerInput";
import { ProgramCreateWithoutSoftwarecomputerInput } from "../inputs/ProgramCreateWithoutSoftwarecomputerInput";
import { ProgramWhereUniqueInput } from "../inputs/ProgramWhereUniqueInput";
export declare class ProgramCreateNestedManyWithoutSoftwarecomputerInput {
    create?: ProgramCreateWithoutSoftwarecomputerInput[] | undefined;
    connectOrCreate?: ProgramCreateOrConnectWithoutSoftwarecomputerInput[] | undefined;
    createMany?: ProgramCreateManySoftwarecomputerInputEnvelope | undefined;
    connect?: ProgramWhereUniqueInput[] | undefined;
}
