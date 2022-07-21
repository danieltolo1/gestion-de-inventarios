import { ProgramCreateOrConnectWithoutComputerInput } from "../inputs/ProgramCreateOrConnectWithoutComputerInput";
import { ProgramCreateWithoutComputerInput } from "../inputs/ProgramCreateWithoutComputerInput";
import { ProgramScalarWhereInput } from "../inputs/ProgramScalarWhereInput";
import { ProgramUpdateManyWithWhereWithoutComputerInput } from "../inputs/ProgramUpdateManyWithWhereWithoutComputerInput";
import { ProgramUpdateWithWhereUniqueWithoutComputerInput } from "../inputs/ProgramUpdateWithWhereUniqueWithoutComputerInput";
import { ProgramUpsertWithWhereUniqueWithoutComputerInput } from "../inputs/ProgramUpsertWithWhereUniqueWithoutComputerInput";
import { ProgramWhereUniqueInput } from "../inputs/ProgramWhereUniqueInput";
export declare class ProgramUpdateManyWithoutComputerInput {
    create?: ProgramCreateWithoutComputerInput[] | undefined;
    connectOrCreate?: ProgramCreateOrConnectWithoutComputerInput[] | undefined;
    upsert?: ProgramUpsertWithWhereUniqueWithoutComputerInput[] | undefined;
    set?: ProgramWhereUniqueInput[] | undefined;
    disconnect?: ProgramWhereUniqueInput[] | undefined;
    delete?: ProgramWhereUniqueInput[] | undefined;
    connect?: ProgramWhereUniqueInput[] | undefined;
    update?: ProgramUpdateWithWhereUniqueWithoutComputerInput[] | undefined;
    updateMany?: ProgramUpdateManyWithWhereWithoutComputerInput[] | undefined;
    deleteMany?: ProgramScalarWhereInput[] | undefined;
}
