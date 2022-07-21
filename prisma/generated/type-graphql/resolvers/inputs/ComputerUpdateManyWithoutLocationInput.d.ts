import { ComputerCreateManyLocationInputEnvelope } from "../inputs/ComputerCreateManyLocationInputEnvelope";
import { ComputerCreateOrConnectWithoutLocationInput } from "../inputs/ComputerCreateOrConnectWithoutLocationInput";
import { ComputerCreateWithoutLocationInput } from "../inputs/ComputerCreateWithoutLocationInput";
import { ComputerScalarWhereInput } from "../inputs/ComputerScalarWhereInput";
import { ComputerUpdateManyWithWhereWithoutLocationInput } from "../inputs/ComputerUpdateManyWithWhereWithoutLocationInput";
import { ComputerUpdateWithWhereUniqueWithoutLocationInput } from "../inputs/ComputerUpdateWithWhereUniqueWithoutLocationInput";
import { ComputerUpsertWithWhereUniqueWithoutLocationInput } from "../inputs/ComputerUpsertWithWhereUniqueWithoutLocationInput";
import { ComputerWhereUniqueInput } from "../inputs/ComputerWhereUniqueInput";
export declare class ComputerUpdateManyWithoutLocationInput {
    create?: ComputerCreateWithoutLocationInput[] | undefined;
    connectOrCreate?: ComputerCreateOrConnectWithoutLocationInput[] | undefined;
    upsert?: ComputerUpsertWithWhereUniqueWithoutLocationInput[] | undefined;
    createMany?: ComputerCreateManyLocationInputEnvelope | undefined;
    set?: ComputerWhereUniqueInput[] | undefined;
    disconnect?: ComputerWhereUniqueInput[] | undefined;
    delete?: ComputerWhereUniqueInput[] | undefined;
    connect?: ComputerWhereUniqueInput[] | undefined;
    update?: ComputerUpdateWithWhereUniqueWithoutLocationInput[] | undefined;
    updateMany?: ComputerUpdateManyWithWhereWithoutLocationInput[] | undefined;
    deleteMany?: ComputerScalarWhereInput[] | undefined;
}
