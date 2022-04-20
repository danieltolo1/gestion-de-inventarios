import { ProductCreateManyProduct_typeInputEnvelope } from "../inputs/ProductCreateManyProduct_typeInputEnvelope";
import { ProductCreateOrConnectWithoutProduct_typeInput } from "../inputs/ProductCreateOrConnectWithoutProduct_typeInput";
import { ProductCreateWithoutProduct_typeInput } from "../inputs/ProductCreateWithoutProduct_typeInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedManyWithoutProduct_typeInput {
    create?: ProductCreateWithoutProduct_typeInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_typeInput[] | undefined;
    createMany?: ProductCreateManyProduct_typeInputEnvelope | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
}
