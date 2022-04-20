import { MaintenanceCreateOrConnectWithoutPartComputerInput } from "../inputs/MaintenanceCreateOrConnectWithoutPartComputerInput";
import { MaintenanceCreateWithoutPartComputerInput } from "../inputs/MaintenanceCreateWithoutPartComputerInput";
import { MaintenanceWhereUniqueInput } from "../inputs/MaintenanceWhereUniqueInput";
export declare class MaintenanceCreateNestedOneWithoutPartComputerInput {
    create?: MaintenanceCreateWithoutPartComputerInput | undefined;
    connectOrCreate?: MaintenanceCreateOrConnectWithoutPartComputerInput | undefined;
    connect?: MaintenanceWhereUniqueInput | undefined;
}
