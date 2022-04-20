import { MaintenanceCreateOrConnectWithoutPartComputerInput } from "../inputs/MaintenanceCreateOrConnectWithoutPartComputerInput";
import { MaintenanceCreateWithoutPartComputerInput } from "../inputs/MaintenanceCreateWithoutPartComputerInput";
import { MaintenanceUpdateWithoutPartComputerInput } from "../inputs/MaintenanceUpdateWithoutPartComputerInput";
import { MaintenanceUpsertWithoutPartComputerInput } from "../inputs/MaintenanceUpsertWithoutPartComputerInput";
import { MaintenanceWhereUniqueInput } from "../inputs/MaintenanceWhereUniqueInput";
export declare class MaintenanceUpdateOneRequiredWithoutPartComputerInput {
    create?: MaintenanceCreateWithoutPartComputerInput | undefined;
    connectOrCreate?: MaintenanceCreateOrConnectWithoutPartComputerInput | undefined;
    upsert?: MaintenanceUpsertWithoutPartComputerInput | undefined;
    connect?: MaintenanceWhereUniqueInput | undefined;
    update?: MaintenanceUpdateWithoutPartComputerInput | undefined;
}
