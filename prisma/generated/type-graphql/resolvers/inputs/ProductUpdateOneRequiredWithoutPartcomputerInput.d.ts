import { ProductCreateOrConnectWithoutPartcomputerInput } from "../inputs/ProductCreateOrConnectWithoutPartcomputerInput";
import { ProductCreateWithoutPartcomputerInput } from "../inputs/ProductCreateWithoutPartcomputerInput";
import { ProductUpdateWithoutPartcomputerInput } from "../inputs/ProductUpdateWithoutPartcomputerInput";
import { ProductUpsertWithoutPartcomputerInput } from "../inputs/ProductUpsertWithoutPartcomputerInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateOneRequiredWithoutPartcomputerInput {
    create?: ProductCreateWithoutPartcomputerInput | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutPartcomputerInput | undefined;
    upsert?: ProductUpsertWithoutPartcomputerInput | undefined;
    connect?: ProductWhereUniqueInput | undefined;
    update?: ProductUpdateWithoutPartcomputerInput | undefined;
}
