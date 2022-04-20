import { LocationCreateOrConnectWithoutPartComputerInput } from "../inputs/LocationCreateOrConnectWithoutPartComputerInput";
import { LocationCreateWithoutPartComputerInput } from "../inputs/LocationCreateWithoutPartComputerInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";
export declare class LocationCreateNestedOneWithoutPartComputerInput {
    create?: LocationCreateWithoutPartComputerInput | undefined;
    connectOrCreate?: LocationCreateOrConnectWithoutPartComputerInput | undefined;
    connect?: LocationWhereUniqueInput | undefined;
}
