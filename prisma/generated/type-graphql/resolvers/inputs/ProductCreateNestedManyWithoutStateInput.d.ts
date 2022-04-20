import { ProductCreateManyStateInputEnvelope } from "../inputs/ProductCreateManyStateInputEnvelope";
import { ProductCreateOrConnectWithoutStateInput } from "../inputs/ProductCreateOrConnectWithoutStateInput";
import { ProductCreateWithoutStateInput } from "../inputs/ProductCreateWithoutStateInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedManyWithoutStateInput {
    create?: ProductCreateWithoutStateInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutStateInput[] | undefined;
    createMany?: ProductCreateManyStateInputEnvelope | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
}
