import { ProductCreateManyLocationInputEnvelope } from "../inputs/ProductCreateManyLocationInputEnvelope";
import { ProductCreateOrConnectWithoutLocationInput } from "../inputs/ProductCreateOrConnectWithoutLocationInput";
import { ProductCreateWithoutLocationInput } from "../inputs/ProductCreateWithoutLocationInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutLocationInput } from "../inputs/ProductUpdateManyWithWhereWithoutLocationInput";
import { ProductUpdateWithWhereUniqueWithoutLocationInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutLocationInput";
import { ProductUpsertWithWhereUniqueWithoutLocationInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutLocationInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateManyWithoutLocationInput {
    create?: ProductCreateWithoutLocationInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutLocationInput[] | undefined;
    upsert?: ProductUpsertWithWhereUniqueWithoutLocationInput[] | undefined;
    createMany?: ProductCreateManyLocationInputEnvelope | undefined;
    set?: ProductWhereUniqueInput[] | undefined;
    disconnect?: ProductWhereUniqueInput[] | undefined;
    delete?: ProductWhereUniqueInput[] | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
    update?: ProductUpdateWithWhereUniqueWithoutLocationInput[] | undefined;
    updateMany?: ProductUpdateManyWithWhereWithoutLocationInput[] | undefined;
    deleteMany?: ProductScalarWhereInput[] | undefined;
}
