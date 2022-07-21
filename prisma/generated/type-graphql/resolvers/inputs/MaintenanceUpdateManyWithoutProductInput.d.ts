import { MaintenanceCreateOrConnectWithoutProductInput } from "../inputs/MaintenanceCreateOrConnectWithoutProductInput";
import { MaintenanceCreateWithoutProductInput } from "../inputs/MaintenanceCreateWithoutProductInput";
import { MaintenanceScalarWhereInput } from "../inputs/MaintenanceScalarWhereInput";
import { MaintenanceUpdateManyWithWhereWithoutProductInput } from "../inputs/MaintenanceUpdateManyWithWhereWithoutProductInput";
import { MaintenanceUpdateWithWhereUniqueWithoutProductInput } from "../inputs/MaintenanceUpdateWithWhereUniqueWithoutProductInput";
import { MaintenanceUpsertWithWhereUniqueWithoutProductInput } from "../inputs/MaintenanceUpsertWithWhereUniqueWithoutProductInput";
import { MaintenanceWhereUniqueInput } from "../inputs/MaintenanceWhereUniqueInput";
export declare class MaintenanceUpdateManyWithoutProductInput {
    create?: MaintenanceCreateWithoutProductInput[] | undefined;
    connectOrCreate?: MaintenanceCreateOrConnectWithoutProductInput[] | undefined;
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutProductInput[] | undefined;
    set?: MaintenanceWhereUniqueInput[] | undefined;
    disconnect?: MaintenanceWhereUniqueInput[] | undefined;
    delete?: MaintenanceWhereUniqueInput[] | undefined;
    connect?: MaintenanceWhereUniqueInput[] | undefined;
    update?: MaintenanceUpdateWithWhereUniqueWithoutProductInput[] | undefined;
    updateMany?: MaintenanceUpdateManyWithWhereWithoutProductInput[] | undefined;
    deleteMany?: MaintenanceScalarWhereInput[] | undefined;
}
