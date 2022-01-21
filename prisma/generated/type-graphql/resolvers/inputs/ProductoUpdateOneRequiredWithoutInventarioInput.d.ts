import { ProductoCreateOrConnectWithoutInventarioInput } from "../inputs/ProductoCreateOrConnectWithoutInventarioInput";
import { ProductoCreateWithoutInventarioInput } from "../inputs/ProductoCreateWithoutInventarioInput";
import { ProductoUpdateWithoutInventarioInput } from "../inputs/ProductoUpdateWithoutInventarioInput";
import { ProductoUpsertWithoutInventarioInput } from "../inputs/ProductoUpsertWithoutInventarioInput";
import { ProductoWhereUniqueInput } from "../inputs/ProductoWhereUniqueInput";
export declare class ProductoUpdateOneRequiredWithoutInventarioInput {
    create?: ProductoCreateWithoutInventarioInput | undefined;
    connectOrCreate?: ProductoCreateOrConnectWithoutInventarioInput | undefined;
    upsert?: ProductoUpsertWithoutInventarioInput | undefined;
    connect?: ProductoWhereUniqueInput | undefined;
    update?: ProductoUpdateWithoutInventarioInput | undefined;
}
