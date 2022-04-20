import { MaintenanceCreateManyUserInputEnvelope } from "../inputs/MaintenanceCreateManyUserInputEnvelope";
import { MaintenanceCreateOrConnectWithoutUserInput } from "../inputs/MaintenanceCreateOrConnectWithoutUserInput";
import { MaintenanceCreateWithoutUserInput } from "../inputs/MaintenanceCreateWithoutUserInput";
import { MaintenanceWhereUniqueInput } from "../inputs/MaintenanceWhereUniqueInput";
export declare class MaintenanceCreateNestedManyWithoutUserInput {
    create?: MaintenanceCreateWithoutUserInput[] | undefined;
    connectOrCreate?: MaintenanceCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: MaintenanceCreateManyUserInputEnvelope | undefined;
    connect?: MaintenanceWhereUniqueInput[] | undefined;
}
