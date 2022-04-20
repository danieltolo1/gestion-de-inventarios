import { PartComputerCreateManyComputerInputEnvelope } from "../inputs/PartComputerCreateManyComputerInputEnvelope";
import { PartComputerCreateOrConnectWithoutComputerInput } from "../inputs/PartComputerCreateOrConnectWithoutComputerInput";
import { PartComputerCreateWithoutComputerInput } from "../inputs/PartComputerCreateWithoutComputerInput";
import { PartComputerScalarWhereInput } from "../inputs/PartComputerScalarWhereInput";
import { PartComputerUpdateManyWithWhereWithoutComputerInput } from "../inputs/PartComputerUpdateManyWithWhereWithoutComputerInput";
import { PartComputerUpdateWithWhereUniqueWithoutComputerInput } from "../inputs/PartComputerUpdateWithWhereUniqueWithoutComputerInput";
import { PartComputerUpsertWithWhereUniqueWithoutComputerInput } from "../inputs/PartComputerUpsertWithWhereUniqueWithoutComputerInput";
import { PartComputerWhereUniqueInput } from "../inputs/PartComputerWhereUniqueInput";
export declare class PartComputerUpdateManyWithoutComputerInput {
    create?: PartComputerCreateWithoutComputerInput[] | undefined;
    connectOrCreate?: PartComputerCreateOrConnectWithoutComputerInput[] | undefined;
    upsert?: PartComputerUpsertWithWhereUniqueWithoutComputerInput[] | undefined;
    createMany?: PartComputerCreateManyComputerInputEnvelope | undefined;
    set?: PartComputerWhereUniqueInput[] | undefined;
    disconnect?: PartComputerWhereUniqueInput[] | undefined;
    delete?: PartComputerWhereUniqueInput[] | undefined;
    connect?: PartComputerWhereUniqueInput[] | undefined;
    update?: PartComputerUpdateWithWhereUniqueWithoutComputerInput[] | undefined;
    updateMany?: PartComputerUpdateManyWithWhereWithoutComputerInput[] | undefined;
    deleteMany?: PartComputerScalarWhereInput[] | undefined;
}
