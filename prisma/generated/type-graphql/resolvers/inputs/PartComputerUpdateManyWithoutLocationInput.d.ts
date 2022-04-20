import { PartComputerCreateManyLocationInputEnvelope } from "../inputs/PartComputerCreateManyLocationInputEnvelope";
import { PartComputerCreateOrConnectWithoutLocationInput } from "../inputs/PartComputerCreateOrConnectWithoutLocationInput";
import { PartComputerCreateWithoutLocationInput } from "../inputs/PartComputerCreateWithoutLocationInput";
import { PartComputerScalarWhereInput } from "../inputs/PartComputerScalarWhereInput";
import { PartComputerUpdateManyWithWhereWithoutLocationInput } from "../inputs/PartComputerUpdateManyWithWhereWithoutLocationInput";
import { PartComputerUpdateWithWhereUniqueWithoutLocationInput } from "../inputs/PartComputerUpdateWithWhereUniqueWithoutLocationInput";
import { PartComputerUpsertWithWhereUniqueWithoutLocationInput } from "../inputs/PartComputerUpsertWithWhereUniqueWithoutLocationInput";
import { PartComputerWhereUniqueInput } from "../inputs/PartComputerWhereUniqueInput";
export declare class PartComputerUpdateManyWithoutLocationInput {
    create?: PartComputerCreateWithoutLocationInput[] | undefined;
    connectOrCreate?: PartComputerCreateOrConnectWithoutLocationInput[] | undefined;
    upsert?: PartComputerUpsertWithWhereUniqueWithoutLocationInput[] | undefined;
    createMany?: PartComputerCreateManyLocationInputEnvelope | undefined;
    set?: PartComputerWhereUniqueInput[] | undefined;
    disconnect?: PartComputerWhereUniqueInput[] | undefined;
    delete?: PartComputerWhereUniqueInput[] | undefined;
    connect?: PartComputerWhereUniqueInput[] | undefined;
    update?: PartComputerUpdateWithWhereUniqueWithoutLocationInput[] | undefined;
    updateMany?: PartComputerUpdateManyWithWhereWithoutLocationInput[] | undefined;
    deleteMany?: PartComputerScalarWhereInput[] | undefined;
}
