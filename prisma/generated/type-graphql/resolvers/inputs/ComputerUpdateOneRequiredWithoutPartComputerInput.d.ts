import { ComputerCreateOrConnectWithoutPartComputerInput } from "../inputs/ComputerCreateOrConnectWithoutPartComputerInput";
import { ComputerCreateWithoutPartComputerInput } from "../inputs/ComputerCreateWithoutPartComputerInput";
import { ComputerUpdateWithoutPartComputerInput } from "../inputs/ComputerUpdateWithoutPartComputerInput";
import { ComputerUpsertWithoutPartComputerInput } from "../inputs/ComputerUpsertWithoutPartComputerInput";
import { ComputerWhereUniqueInput } from "../inputs/ComputerWhereUniqueInput";
export declare class ComputerUpdateOneRequiredWithoutPartComputerInput {
    create?: ComputerCreateWithoutPartComputerInput | undefined;
    connectOrCreate?: ComputerCreateOrConnectWithoutPartComputerInput | undefined;
    upsert?: ComputerUpsertWithoutPartComputerInput | undefined;
    connect?: ComputerWhereUniqueInput | undefined;
    update?: ComputerUpdateWithoutPartComputerInput | undefined;
}
