import { ProductoCreateOrConnectWithoutInventarioInput } from "../inputs/ProductoCreateOrConnectWithoutInventarioInput";
import { ProductoCreateWithoutInventarioInput } from "../inputs/ProductoCreateWithoutInventarioInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";
export declare class ProductoCreateNestedOneWithoutInventarioInput {
    create?: ProductoCreateWithoutInventarioInput | undefined;
    connectOrCreate?: ProductoCreateOrConnectWithoutInventarioInput | undefined;
    connect?: ProductoWhereUniqueInput | undefined;
}
