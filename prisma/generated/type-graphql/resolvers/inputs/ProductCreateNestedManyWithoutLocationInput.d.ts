import { ProductCreateManyLocationInputEnvelope } from "../inputs/ProductCreateManyLocationInputEnvelope";
import { ProductCreateOrConnectWithoutLocationInput } from "../inputs/ProductCreateOrConnectWithoutLocationInput";
import { ProductCreateWithoutLocationInput } from "../inputs/ProductCreateWithoutLocationInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedManyWithoutLocationInput {
    create?: ProductCreateWithoutLocationInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutLocationInput[] | undefined;
    createMany?: ProductCreateManyLocationInputEnvelope | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
}
