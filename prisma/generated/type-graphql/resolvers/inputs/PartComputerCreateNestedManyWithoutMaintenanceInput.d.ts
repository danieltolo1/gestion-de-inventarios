import { PartComputerCreateManyMaintenanceInputEnvelope } from "../inputs/PartComputerCreateManyMaintenanceInputEnvelope";
import { PartComputerCreateOrConnectWithoutMaintenanceInput } from "../inputs/PartComputerCreateOrConnectWithoutMaintenanceInput";
import { PartComputerCreateWithoutMaintenanceInput } from "../inputs/PartComputerCreateWithoutMaintenanceInput";
import { PartComputerWhereUniqueInput } from "../inputs/PartComputerWhereUniqueInput";
export declare class PartComputerCreateNestedManyWithoutMaintenanceInput {
    create?: PartComputerCreateWithoutMaintenanceInput[] | undefined;
    connectOrCreate?: PartComputerCreateOrConnectWithoutMaintenanceInput[] | undefined;
    createMany?: PartComputerCreateManyMaintenanceInputEnvelope | undefined;
    connect?: PartComputerWhereUniqueInput[] | undefined;
}
