import { ProgramCreateManySoftwarecomputerInputEnvelope } from "../inputs/ProgramCreateManySoftwarecomputerInputEnvelope";
import { ProgramCreateOrConnectWithoutSoftwarecomputerInput } from "../inputs/ProgramCreateOrConnectWithoutSoftwarecomputerInput";
import { ProgramCreateWithoutSoftwarecomputerInput } from "../inputs/ProgramCreateWithoutSoftwarecomputerInput";
import { ProgramScalarWhereInput } from "../inputs/ProgramScalarWhereInput";
import { ProgramUpdateManyWithWhereWithoutSoftwarecomputerInput } from "../inputs/ProgramUpdateManyWithWhereWithoutSoftwarecomputerInput";
import { ProgramUpdateWithWhereUniqueWithoutSoftwarecomputerInput } from "../inputs/ProgramUpdateWithWhereUniqueWithoutSoftwarecomputerInput";
import { ProgramUpsertWithWhereUniqueWithoutSoftwarecomputerInput } from "../inputs/ProgramUpsertWithWhereUniqueWithoutSoftwarecomputerInput";
import { ProgramWhereUniqueInput } from "../inputs/ProgramWhereUniqueInput";
export declare class ProgramUpdateManyWithoutSoftwarecomputerInput {
    create?: ProgramCreateWithoutSoftwarecomputerInput[] | undefined;
    connectOrCreate?: ProgramCreateOrConnectWithoutSoftwarecomputerInput[] | undefined;
    upsert?: ProgramUpsertWithWhereUniqueWithoutSoftwarecomputerInput[] | undefined;
    createMany?: ProgramCreateManySoftwarecomputerInputEnvelope | undefined;
    set?: ProgramWhereUniqueInput[] | undefined;
    disconnect?: ProgramWhereUniqueInput[] | undefined;
    delete?: ProgramWhereUniqueInput[] | undefined;
    connect?: ProgramWhereUniqueInput[] | undefined;
    update?: ProgramUpdateWithWhereUniqueWithoutSoftwarecomputerInput[] | undefined;
    updateMany?: ProgramUpdateManyWithWhereWithoutSoftwarecomputerInput[] | undefined;
    deleteMany?: ProgramScalarWhereInput[] | undefined;
}
