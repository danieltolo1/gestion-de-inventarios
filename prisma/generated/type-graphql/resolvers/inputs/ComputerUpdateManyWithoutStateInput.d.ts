import { ComputerCreateManyStateInputEnvelope } from "../inputs/ComputerCreateManyStateInputEnvelope";
import { ComputerCreateOrConnectWithoutStateInput } from "../inputs/ComputerCreateOrConnectWithoutStateInput";
import { ComputerCreateWithoutStateInput } from "../inputs/ComputerCreateWithoutStateInput";
import { ComputerScalarWhereInput } from "../inputs/ComputerScalarWhereInput";
import { ComputerUpdateManyWithWhereWithoutStateInput } from "../inputs/ComputerUpdateManyWithWhereWithoutStateInput";
import { ComputerUpdateWithWhereUniqueWithoutStateInput } from "../inputs/ComputerUpdateWithWhereUniqueWithoutStateInput";
import { ComputerUpsertWithWhereUniqueWithoutStateInput } from "../inputs/ComputerUpsertWithWhereUniqueWithoutStateInput";
import { ComputerWhereUniqueInput } from "../inputs/ComputerWhereUniqueInput";
export declare class ComputerUpdateManyWithoutStateInput {
    create?: ComputerCreateWithoutStateInput[] | undefined;
    connectOrCreate?: ComputerCreateOrConnectWithoutStateInput[] | undefined;
    upsert?: ComputerUpsertWithWhereUniqueWithoutStateInput[] | undefined;
    createMany?: ComputerCreateManyStateInputEnvelope | undefined;
    set?: ComputerWhereUniqueInput[] | undefined;
    disconnect?: ComputerWhereUniqueInput[] | undefined;
    delete?: ComputerWhereUniqueInput[] | undefined;
    connect?: ComputerWhereUniqueInput[] | undefined;
    update?: ComputerUpdateWithWhereUniqueWithoutStateInput[] | undefined;
    updateMany?: ComputerUpdateManyWithWhereWithoutStateInput[] | undefined;
    deleteMany?: ComputerScalarWhereInput[] | undefined;
}
