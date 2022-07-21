import { ComputerCreateOrConnectWithoutProgramInput } from "../inputs/ComputerCreateOrConnectWithoutProgramInput";
import { ComputerCreateWithoutProgramInput } from "../inputs/ComputerCreateWithoutProgramInput";
import { ComputerScalarWhereInput } from "../inputs/ComputerScalarWhereInput";
import { ComputerUpdateManyWithWhereWithoutProgramInput } from "../inputs/ComputerUpdateManyWithWhereWithoutProgramInput";
import { ComputerUpdateWithWhereUniqueWithoutProgramInput } from "../inputs/ComputerUpdateWithWhereUniqueWithoutProgramInput";
import { ComputerUpsertWithWhereUniqueWithoutProgramInput } from "../inputs/ComputerUpsertWithWhereUniqueWithoutProgramInput";
import { ComputerWhereUniqueInput } from "../inputs/ComputerWhereUniqueInput";
export declare class ComputerUpdateManyWithoutProgramInput {
    create?: ComputerCreateWithoutProgramInput[] | undefined;
    connectOrCreate?: ComputerCreateOrConnectWithoutProgramInput[] | undefined;
    upsert?: ComputerUpsertWithWhereUniqueWithoutProgramInput[] | undefined;
    set?: ComputerWhereUniqueInput[] | undefined;
    disconnect?: ComputerWhereUniqueInput[] | undefined;
    delete?: ComputerWhereUniqueInput[] | undefined;
    connect?: ComputerWhereUniqueInput[] | undefined;
    update?: ComputerUpdateWithWhereUniqueWithoutProgramInput[] | undefined;
    updateMany?: ComputerUpdateManyWithWhereWithoutProgramInput[] | undefined;
    deleteMany?: ComputerScalarWhereInput[] | undefined;
}
