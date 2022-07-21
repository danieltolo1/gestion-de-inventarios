import { ProductCreateOrConnectWithoutMaintenanceInput } from "../inputs/ProductCreateOrConnectWithoutMaintenanceInput";
import { ProductCreateWithoutMaintenanceInput } from "../inputs/ProductCreateWithoutMaintenanceInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutMaintenanceInput } from "../inputs/ProductUpdateManyWithWhereWithoutMaintenanceInput";
import { ProductUpdateWithWhereUniqueWithoutMaintenanceInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutMaintenanceInput";
import { ProductUpsertWithWhereUniqueWithoutMaintenanceInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutMaintenanceInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateManyWithoutMaintenanceInput {
    create?: ProductCreateWithoutMaintenanceInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutMaintenanceInput[] | undefined;
    upsert?: ProductUpsertWithWhereUniqueWithoutMaintenanceInput[] | undefined;
    set?: ProductWhereUniqueInput[] | undefined;
    disconnect?: ProductWhereUniqueInput[] | undefined;
    delete?: ProductWhereUniqueInput[] | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
    update?: ProductUpdateWithWhereUniqueWithoutMaintenanceInput[] | undefined;
    updateMany?: ProductUpdateManyWithWhereWithoutMaintenanceInput[] | undefined;
    deleteMany?: ProductScalarWhereInput[] | undefined;
}
