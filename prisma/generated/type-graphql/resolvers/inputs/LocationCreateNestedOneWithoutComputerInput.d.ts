import { LocationCreateOrConnectWithoutComputerInput } from "../inputs/LocationCreateOrConnectWithoutComputerInput";
import { LocationCreateWithoutComputerInput } from "../inputs/LocationCreateWithoutComputerInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";
export declare class LocationCreateNestedOneWithoutComputerInput {
    create?: LocationCreateWithoutComputerInput | undefined;
    connectOrCreate?: LocationCreateOrConnectWithoutComputerInput | undefined;
    connect?: LocationWhereUniqueInput | undefined;
}
