import { Product_TypeCreateOrConnectWithoutProductInput } from "../inputs/Product_TypeCreateOrConnectWithoutProductInput";
import { Product_TypeCreateWithoutProductInput } from "../inputs/Product_TypeCreateWithoutProductInput";
import { Product_TypeUpdateWithoutProductInput } from "../inputs/Product_TypeUpdateWithoutProductInput";
import { Product_TypeUpsertWithoutProductInput } from "../inputs/Product_TypeUpsertWithoutProductInput";
import { Product_TypeWhereUniqueInput } from "../inputs/Product_TypeWhereUniqueInput";
export declare class Product_TypeUpdateOneRequiredWithoutProductInput {
    create?: Product_TypeCreateWithoutProductInput | undefined;
    connectOrCreate?: Product_TypeCreateOrConnectWithoutProductInput | undefined;
    upsert?: Product_TypeUpsertWithoutProductInput | undefined;
    connect?: Product_TypeWhereUniqueInput | undefined;
    update?: Product_TypeUpdateWithoutProductInput | undefined;
}
