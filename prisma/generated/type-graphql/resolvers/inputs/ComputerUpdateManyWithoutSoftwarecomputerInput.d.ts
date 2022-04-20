import { ComputerCreateManySoftwarecomputerInputEnvelope } from "../inputs/ComputerCreateManySoftwarecomputerInputEnvelope";
import { ComputerCreateOrConnectWithoutSoftwarecomputerInput } from "../inputs/ComputerCreateOrConnectWithoutSoftwarecomputerInput";
import { ComputerCreateWithoutSoftwarecomputerInput } from "../inputs/ComputerCreateWithoutSoftwarecomputerInput";
import { ComputerScalarWhereInput } from "../inputs/ComputerScalarWhereInput";
import { ComputerUpdateManyWithWhereWithoutSoftwarecomputerInput } from "../inputs/ComputerUpdateManyWithWhereWithoutSoftwarecomputerInput";
import { ComputerUpdateWithWhereUniqueWithoutSoftwarecomputerInput } from "../inputs/ComputerUpdateWithWhereUniqueWithoutSoftwarecomputerInput";
import { ComputerUpsertWithWhereUniqueWithoutSoftwarecomputerInput } from "../inputs/ComputerUpsertWithWhereUniqueWithoutSoftwarecomputerInput";
import { ComputerWhereUniqueInput } from "../inputs/ComputerWhereUniqueInput";
export declare class ComputerUpdateManyWithoutSoftwarecomputerInput {
    create?: ComputerCreateWithoutSoftwarecomputerInput[] | undefined;
    connectOrCreate?: ComputerCreateOrConnectWithoutSoftwarecomputerInput[] | undefined;
    upsert?: ComputerUpsertWithWhereUniqueWithoutSoftwarecomputerInput[] | undefined;
    createMany?: ComputerCreateManySoftwarecomputerInputEnvelope | undefined;
    set?: ComputerWhereUniqueInput[] | undefined;
    disconnect?: ComputerWhereUniqueInput[] | undefined;
    delete?: ComputerWhereUniqueInput[] | undefined;
    connect?: ComputerWhereUniqueInput[] | undefined;
    update?: ComputerUpdateWithWhereUniqueWithoutSoftwarecomputerInput[] | undefined;
    updateMany?: ComputerUpdateManyWithWhereWithoutSoftwarecomputerInput[] | undefined;
    deleteMany?: ComputerScalarWhereInput[] | undefined;
}
