import { MaintenanceCreateManyUserInputEnvelope } from "../inputs/MaintenanceCreateManyUserInputEnvelope";
import { MaintenanceCreateOrConnectWithoutUserInput } from "../inputs/MaintenanceCreateOrConnectWithoutUserInput";
import { MaintenanceCreateWithoutUserInput } from "../inputs/MaintenanceCreateWithoutUserInput";
import { MaintenanceScalarWhereInput } from "../inputs/MaintenanceScalarWhereInput";
import { MaintenanceUpdateManyWithWhereWithoutUserInput } from "../inputs/MaintenanceUpdateManyWithWhereWithoutUserInput";
import { MaintenanceUpdateWithWhereUniqueWithoutUserInput } from "../inputs/MaintenanceUpdateWithWhereUniqueWithoutUserInput";
import { MaintenanceUpsertWithWhereUniqueWithoutUserInput } from "../inputs/MaintenanceUpsertWithWhereUniqueWithoutUserInput";
import { MaintenanceWhereUniqueInput } from "../inputs/MaintenanceWhereUniqueInput";
export declare class MaintenanceUpdateManyWithoutUserInput {
    create?: MaintenanceCreateWithoutUserInput[] | undefined;
    connectOrCreate?: MaintenanceCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: MaintenanceCreateManyUserInputEnvelope | undefined;
    set?: MaintenanceWhereUniqueInput[] | undefined;
    disconnect?: MaintenanceWhereUniqueInput[] | undefined;
    delete?: MaintenanceWhereUniqueInput[] | undefined;
    connect?: MaintenanceWhereUniqueInput[] | undefined;
    update?: MaintenanceUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: MaintenanceUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: MaintenanceScalarWhereInput[] | undefined;
}
