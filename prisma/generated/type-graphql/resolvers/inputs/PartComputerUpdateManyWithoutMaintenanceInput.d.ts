import { PartComputerCreateManyMaintenanceInputEnvelope } from "../inputs/PartComputerCreateManyMaintenanceInputEnvelope";
import { PartComputerCreateOrConnectWithoutMaintenanceInput } from "../inputs/PartComputerCreateOrConnectWithoutMaintenanceInput";
import { PartComputerCreateWithoutMaintenanceInput } from "../inputs/PartComputerCreateWithoutMaintenanceInput";
import { PartComputerScalarWhereInput } from "../inputs/PartComputerScalarWhereInput";
import { PartComputerUpdateManyWithWhereWithoutMaintenanceInput } from "../inputs/PartComputerUpdateManyWithWhereWithoutMaintenanceInput";
import { PartComputerUpdateWithWhereUniqueWithoutMaintenanceInput } from "../inputs/PartComputerUpdateWithWhereUniqueWithoutMaintenanceInput";
import { PartComputerUpsertWithWhereUniqueWithoutMaintenanceInput } from "../inputs/PartComputerUpsertWithWhereUniqueWithoutMaintenanceInput";
import { PartComputerWhereUniqueInput } from "../inputs/PartComputerWhereUniqueInput";
export declare class PartComputerUpdateManyWithoutMaintenanceInput {
    create?: PartComputerCreateWithoutMaintenanceInput[] | undefined;
    connectOrCreate?: PartComputerCreateOrConnectWithoutMaintenanceInput[] | undefined;
    upsert?: PartComputerUpsertWithWhereUniqueWithoutMaintenanceInput[] | undefined;
    createMany?: PartComputerCreateManyMaintenanceInputEnvelope | undefined;
    set?: PartComputerWhereUniqueInput[] | undefined;
    disconnect?: PartComputerWhereUniqueInput[] | undefined;
    delete?: PartComputerWhereUniqueInput[] | undefined;
    connect?: PartComputerWhereUniqueInput[] | undefined;
    update?: PartComputerUpdateWithWhereUniqueWithoutMaintenanceInput[] | undefined;
    updateMany?: PartComputerUpdateManyWithWhereWithoutMaintenanceInput[] | undefined;
    deleteMany?: PartComputerScalarWhereInput[] | undefined;
}
