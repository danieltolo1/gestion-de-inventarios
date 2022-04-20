import { ProductCreateManyStateInputEnvelope } from "../inputs/ProductCreateManyStateInputEnvelope";
import { ProductCreateOrConnectWithoutStateInput } from "../inputs/ProductCreateOrConnectWithoutStateInput";
import { ProductCreateWithoutStateInput } from "../inputs/ProductCreateWithoutStateInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutStateInput } from "../inputs/ProductUpdateManyWithWhereWithoutStateInput";
import { ProductUpdateWithWhereUniqueWithoutStateInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutStateInput";
import { ProductUpsertWithWhereUniqueWithoutStateInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutStateInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateManyWithoutStateInput {
    create?: ProductCreateWithoutStateInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutStateInput[] | undefined;
    upsert?: ProductUpsertWithWhereUniqueWithoutStateInput[] | undefined;
    createMany?: ProductCreateManyStateInputEnvelope | undefined;
    set?: ProductWhereUniqueInput[] | undefined;
    disconnect?: ProductWhereUniqueInput[] | undefined;
    delete?: ProductWhereUniqueInput[] | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
    update?: ProductUpdateWithWhereUniqueWithoutStateInput[] | undefined;
    updateMany?: ProductUpdateManyWithWhereWithoutStateInput[] | undefined;
    deleteMany?: ProductScalarWhereInput[] | undefined;
}
