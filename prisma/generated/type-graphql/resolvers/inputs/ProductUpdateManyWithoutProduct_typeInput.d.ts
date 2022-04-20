import { ProductCreateManyProduct_typeInputEnvelope } from "../inputs/ProductCreateManyProduct_typeInputEnvelope";
import { ProductCreateOrConnectWithoutProduct_typeInput } from "../inputs/ProductCreateOrConnectWithoutProduct_typeInput";
import { ProductCreateWithoutProduct_typeInput } from "../inputs/ProductCreateWithoutProduct_typeInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutProduct_typeInput } from "../inputs/ProductUpdateManyWithWhereWithoutProduct_typeInput";
import { ProductUpdateWithWhereUniqueWithoutProduct_typeInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutProduct_typeInput";
import { ProductUpsertWithWhereUniqueWithoutProduct_typeInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutProduct_typeInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateManyWithoutProduct_typeInput {
    create?: ProductCreateWithoutProduct_typeInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_typeInput[] | undefined;
    upsert?: ProductUpsertWithWhereUniqueWithoutProduct_typeInput[] | undefined;
    createMany?: ProductCreateManyProduct_typeInputEnvelope | undefined;
    set?: ProductWhereUniqueInput[] | undefined;
    disconnect?: ProductWhereUniqueInput[] | undefined;
    delete?: ProductWhereUniqueInput[] | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
    update?: ProductUpdateWithWhereUniqueWithoutProduct_typeInput[] | undefined;
    updateMany?: ProductUpdateManyWithWhereWithoutProduct_typeInput[] | undefined;
    deleteMany?: ProductScalarWhereInput[] | undefined;
}
