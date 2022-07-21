import { LocationCreateOrConnectWithoutPorductInput } from "../inputs/LocationCreateOrConnectWithoutPorductInput";
import { LocationCreateWithoutPorductInput } from "../inputs/LocationCreateWithoutPorductInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";
export declare class LocationCreateNestedOneWithoutPorductInput {
    create?: LocationCreateWithoutPorductInput | undefined;
    connectOrCreate?: LocationCreateOrConnectWithoutPorductInput | undefined;
    connect?: LocationWhereUniqueInput | undefined;
}
