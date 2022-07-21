import { ProductCreateOrConnectWithoutMaintenanceInput } from "../inputs/ProductCreateOrConnectWithoutMaintenanceInput";
import { ProductCreateWithoutMaintenanceInput } from "../inputs/ProductCreateWithoutMaintenanceInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedManyWithoutMaintenanceInput {
    create?: ProductCreateWithoutMaintenanceInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutMaintenanceInput[] | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
}
