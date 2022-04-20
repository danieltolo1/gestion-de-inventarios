import { StateCreateOrConnectWithoutComputerInput } from "../inputs/StateCreateOrConnectWithoutComputerInput";
import { StateCreateWithoutComputerInput } from "../inputs/StateCreateWithoutComputerInput";
import { StateUpdateWithoutComputerInput } from "../inputs/StateUpdateWithoutComputerInput";
import { StateUpsertWithoutComputerInput } from "../inputs/StateUpsertWithoutComputerInput";
import { StateWhereUniqueInput } from "../inputs/StateWhereUniqueInput";
export declare class StateUpdateOneRequiredWithoutComputerInput {
    create?: StateCreateWithoutComputerInput | undefined;
    connectOrCreate?: StateCreateOrConnectWithoutComputerInput | undefined;
    upsert?: StateUpsertWithoutComputerInput | undefined;
    connect?: StateWhereUniqueInput | undefined;
    update?: StateUpdateWithoutComputerInput | undefined;
}
