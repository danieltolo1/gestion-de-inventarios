import { LocationCreateOrConnectWithoutComputerInput } from "../inputs/LocationCreateOrConnectWithoutComputerInput";
import { LocationCreateWithoutComputerInput } from "../inputs/LocationCreateWithoutComputerInput";
import { LocationUpdateWithoutComputerInput } from "../inputs/LocationUpdateWithoutComputerInput";
import { LocationUpsertWithoutComputerInput } from "../inputs/LocationUpsertWithoutComputerInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";
export declare class LocationUpdateOneRequiredWithoutComputerInput {
    create?: LocationCreateWithoutComputerInput | undefined;
    connectOrCreate?: LocationCreateOrConnectWithoutComputerInput | undefined;
    upsert?: LocationUpsertWithoutComputerInput | undefined;
    connect?: LocationWhereUniqueInput | undefined;
    update?: LocationUpdateWithoutComputerInput | undefined;
}
