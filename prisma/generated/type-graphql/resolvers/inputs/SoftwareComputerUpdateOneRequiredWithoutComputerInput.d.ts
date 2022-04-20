import { SoftwareComputerCreateOrConnectWithoutComputerInput } from "../inputs/SoftwareComputerCreateOrConnectWithoutComputerInput";
import { SoftwareComputerCreateWithoutComputerInput } from "../inputs/SoftwareComputerCreateWithoutComputerInput";
import { SoftwareComputerUpdateWithoutComputerInput } from "../inputs/SoftwareComputerUpdateWithoutComputerInput";
import { SoftwareComputerUpsertWithoutComputerInput } from "../inputs/SoftwareComputerUpsertWithoutComputerInput";
import { SoftwareComputerWhereUniqueInput } from "../inputs/SoftwareComputerWhereUniqueInput";
export declare class SoftwareComputerUpdateOneRequiredWithoutComputerInput {
    create?: SoftwareComputerCreateWithoutComputerInput | undefined;
    connectOrCreate?: SoftwareComputerCreateOrConnectWithoutComputerInput | undefined;
    upsert?: SoftwareComputerUpsertWithoutComputerInput | undefined;
    connect?: SoftwareComputerWhereUniqueInput | undefined;
    update?: SoftwareComputerUpdateWithoutComputerInput | undefined;
}
