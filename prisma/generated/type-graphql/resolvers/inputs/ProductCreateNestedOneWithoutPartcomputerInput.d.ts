import { ProductCreateOrConnectWithoutPartcomputerInput } from "../inputs/ProductCreateOrConnectWithoutPartcomputerInput";
import { ProductCreateWithoutPartcomputerInput } from "../inputs/ProductCreateWithoutPartcomputerInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedOneWithoutPartcomputerInput {
    create?: ProductCreateWithoutPartcomputerInput | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutPartcomputerInput | undefined;
    connect?: ProductWhereUniqueInput | undefined;
}
