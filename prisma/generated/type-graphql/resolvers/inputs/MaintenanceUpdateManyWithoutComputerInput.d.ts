import { MaintenanceCreateManyComputerInputEnvelope } from "../inputs/MaintenanceCreateManyComputerInputEnvelope";
import { MaintenanceCreateOrConnectWithoutComputerInput } from "../inputs/MaintenanceCreateOrConnectWithoutComputerInput";
import { MaintenanceCreateWithoutComputerInput } from "../inputs/MaintenanceCreateWithoutComputerInput";
import { MaintenanceScalarWhereInput } from "../inputs/MaintenanceScalarWhereInput";
import { MaintenanceUpdateManyWithWhereWithoutComputerInput } from "../inputs/MaintenanceUpdateManyWithWhereWithoutComputerInput";
import { MaintenanceUpdateWithWhereUniqueWithoutComputerInput } from "../inputs/MaintenanceUpdateWithWhereUniqueWithoutComputerInput";
import { MaintenanceUpsertWithWhereUniqueWithoutComputerInput } from "../inputs/MaintenanceUpsertWithWhereUniqueWithoutComputerInput";
import { MaintenanceWhereUniqueInput } from "../inputs/MaintenanceWhereUniqueInput";
export declare class MaintenanceUpdateManyWithoutComputerInput {
    create?: MaintenanceCreateWithoutComputerInput[] | undefined;
    connectOrCreate?: MaintenanceCreateOrConnectWithoutComputerInput[] | undefined;
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutComputerInput[] | undefined;
    createMany?: MaintenanceCreateManyComputerInputEnvelope | undefined;
    set?: MaintenanceWhereUniqueInput[] | undefined;
    disconnect?: MaintenanceWhereUniqueInput[] | undefined;
    delete?: MaintenanceWhereUniqueInput[] | undefined;
    connect?: MaintenanceWhereUniqueInput[] | undefined;
    update?: MaintenanceUpdateWithWhereUniqueWithoutComputerInput[] | undefined;
    updateMany?: MaintenanceUpdateManyWithWhereWithoutComputerInput[] | undefined;
    deleteMany?: MaintenanceScalarWhereInput[] | undefined;
}
