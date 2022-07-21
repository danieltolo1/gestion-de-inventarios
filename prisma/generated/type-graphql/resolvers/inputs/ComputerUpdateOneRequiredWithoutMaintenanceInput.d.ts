import { ComputerCreateOrConnectWithoutMaintenanceInput } from "../inputs/ComputerCreateOrConnectWithoutMaintenanceInput";
import { ComputerCreateWithoutMaintenanceInput } from "../inputs/ComputerCreateWithoutMaintenanceInput";
import { ComputerUpdateWithoutMaintenanceInput } from "../inputs/ComputerUpdateWithoutMaintenanceInput";
import { ComputerUpsertWithoutMaintenanceInput } from "../inputs/ComputerUpsertWithoutMaintenanceInput";
import { ComputerWhereUniqueInput } from "../inputs/ComputerWhereUniqueInput";
export declare class ComputerUpdateOneRequiredWithoutMaintenanceInput {
    create?: ComputerCreateWithoutMaintenanceInput | undefined;
    connectOrCreate?: ComputerCreateOrConnectWithoutMaintenanceInput | undefined;
    upsert?: ComputerUpsertWithoutMaintenanceInput | undefined;
    connect?: ComputerWhereUniqueInput | undefined;
    update?: ComputerUpdateWithoutMaintenanceInput | undefined;
}
