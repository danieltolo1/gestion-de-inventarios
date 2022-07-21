import { MaintenanceCreateManyComputerInputEnvelope } from "../inputs/MaintenanceCreateManyComputerInputEnvelope";
import { MaintenanceCreateOrConnectWithoutComputerInput } from "../inputs/MaintenanceCreateOrConnectWithoutComputerInput";
import { MaintenanceCreateWithoutComputerInput } from "../inputs/MaintenanceCreateWithoutComputerInput";
import { MaintenanceWhereUniqueInput } from "../inputs/MaintenanceWhereUniqueInput";
export declare class MaintenanceCreateNestedManyWithoutComputerInput {
    create?: MaintenanceCreateWithoutComputerInput[] | undefined;
    connectOrCreate?: MaintenanceCreateOrConnectWithoutComputerInput[] | undefined;
    createMany?: MaintenanceCreateManyComputerInputEnvelope | undefined;
    connect?: MaintenanceWhereUniqueInput[] | undefined;
}
