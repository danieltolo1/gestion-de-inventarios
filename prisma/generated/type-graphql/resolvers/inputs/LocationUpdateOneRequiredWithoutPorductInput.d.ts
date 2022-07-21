import { LocationCreateOrConnectWithoutPorductInput } from "../inputs/LocationCreateOrConnectWithoutPorductInput";
import { LocationCreateWithoutPorductInput } from "../inputs/LocationCreateWithoutPorductInput";
import { LocationUpdateWithoutPorductInput } from "../inputs/LocationUpdateWithoutPorductInput";
import { LocationUpsertWithoutPorductInput } from "../inputs/LocationUpsertWithoutPorductInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";
export declare class LocationUpdateOneRequiredWithoutPorductInput {
    create?: LocationCreateWithoutPorductInput | undefined;
    connectOrCreate?: LocationCreateOrConnectWithoutPorductInput | undefined;
    upsert?: LocationUpsertWithoutPorductInput | undefined;
    connect?: LocationWhereUniqueInput | undefined;
    update?: LocationUpdateWithoutPorductInput | undefined;
}
