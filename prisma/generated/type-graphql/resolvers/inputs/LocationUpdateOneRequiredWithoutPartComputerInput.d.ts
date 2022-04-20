import { LocationCreateOrConnectWithoutPartComputerInput } from "../inputs/LocationCreateOrConnectWithoutPartComputerInput";
import { LocationCreateWithoutPartComputerInput } from "../inputs/LocationCreateWithoutPartComputerInput";
import { LocationUpdateWithoutPartComputerInput } from "../inputs/LocationUpdateWithoutPartComputerInput";
import { LocationUpsertWithoutPartComputerInput } from "../inputs/LocationUpsertWithoutPartComputerInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";
export declare class LocationUpdateOneRequiredWithoutPartComputerInput {
    create?: LocationCreateWithoutPartComputerInput | undefined;
    connectOrCreate?: LocationCreateOrConnectWithoutPartComputerInput | undefined;
    upsert?: LocationUpsertWithoutPartComputerInput | undefined;
    connect?: LocationWhereUniqueInput | undefined;
    update?: LocationUpdateWithoutPartComputerInput | undefined;
}
