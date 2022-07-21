import { ComputerCreateOrConnectWithoutMaintenanceInput } from "../inputs/ComputerCreateOrConnectWithoutMaintenanceInput";
import { ComputerCreateWithoutMaintenanceInput } from "../inputs/ComputerCreateWithoutMaintenanceInput";
import { ComputerWhereUniqueInput } from "../inputs/ComputerWhereUniqueInput";
export declare class ComputerCreateNestedOneWithoutMaintenanceInput {
    create?: ComputerCreateWithoutMaintenanceInput | undefined;
    connectOrCreate?: ComputerCreateOrConnectWithoutMaintenanceInput | undefined;
    connect?: ComputerWhereUniqueInput | undefined;
}
