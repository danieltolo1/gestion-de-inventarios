import { SoftwareComputerCreateOrConnectWithoutProgramInput } from "../inputs/SoftwareComputerCreateOrConnectWithoutProgramInput";
import { SoftwareComputerCreateWithoutProgramInput } from "../inputs/SoftwareComputerCreateWithoutProgramInput";
import { SoftwareComputerUpdateWithoutProgramInput } from "../inputs/SoftwareComputerUpdateWithoutProgramInput";
import { SoftwareComputerUpsertWithoutProgramInput } from "../inputs/SoftwareComputerUpsertWithoutProgramInput";
import { SoftwareComputerWhereUniqueInput } from "../inputs/SoftwareComputerWhereUniqueInput";
export declare class SoftwareComputerUpdateOneRequiredWithoutProgramInput {
    create?: SoftwareComputerCreateWithoutProgramInput | undefined;
    connectOrCreate?: SoftwareComputerCreateOrConnectWithoutProgramInput | undefined;
    upsert?: SoftwareComputerUpsertWithoutProgramInput | undefined;
    connect?: SoftwareComputerWhereUniqueInput | undefined;
    update?: SoftwareComputerUpdateWithoutProgramInput | undefined;
}
