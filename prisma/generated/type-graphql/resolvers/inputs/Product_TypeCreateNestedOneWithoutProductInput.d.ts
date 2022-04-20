import { Product_TypeCreateOrConnectWithoutProductInput } from "../inputs/Product_TypeCreateOrConnectWithoutProductInput";
import { Product_TypeCreateWithoutProductInput } from "../inputs/Product_TypeCreateWithoutProductInput";
import { Product_TypeWhereUniqueInput } from "../inputs/Product_TypeWhereUniqueInput";
export declare class Product_TypeCreateNestedOneWithoutProductInput {
    create?: Product_TypeCreateWithoutProductInput | undefined;
    connectOrCreate?: Product_TypeCreateOrConnectWithoutProductInput | undefined;
    connect?: Product_TypeWhereUniqueInput | undefined;
}
