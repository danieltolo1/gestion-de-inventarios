import { MaintenanceCreateOrConnectWithoutProductInput } from "../inputs/MaintenanceCreateOrConnectWithoutProductInput";
import { MaintenanceCreateWithoutProductInput } from "../inputs/MaintenanceCreateWithoutProductInput";
import { MaintenanceWhereUniqueInput } from "../inputs/MaintenanceWhereUniqueInput";
export declare class MaintenanceCreateNestedManyWithoutProductInput {
    create?: MaintenanceCreateWithoutProductInput[] | undefined;
    connectOrCreate?: MaintenanceCreateOrConnectWithoutProductInput[] | undefined;
    connect?: MaintenanceWhereUniqueInput[] | undefined;
}
