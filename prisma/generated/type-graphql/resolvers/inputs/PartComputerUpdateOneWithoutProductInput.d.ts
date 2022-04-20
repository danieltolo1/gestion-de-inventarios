import { PartComputerCreateOrConnectWithoutProductInput } from "../inputs/PartComputerCreateOrConnectWithoutProductInput";
import { PartComputerCreateWithoutProductInput } from "../inputs/PartComputerCreateWithoutProductInput";
import { PartComputerUpdateWithoutProductInput } from "../inputs/PartComputerUpdateWithoutProductInput";
import { PartComputerUpsertWithoutProductInput } from "../inputs/PartComputerUpsertWithoutProductInput";
import { PartComputerWhereUniqueInput } from "../inputs/PartComputerWhereUniqueInput";
export declare class PartComputerUpdateOneWithoutProductInput {
    create?: PartComputerCreateWithoutProductInput | undefined;
    connectOrCreate?: PartComputerCreateOrConnectWithoutProductInput | undefined;
    upsert?: PartComputerUpsertWithoutProductInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: PartComputerWhereUniqueInput | undefined;
    update?: PartComputerUpdateWithoutProductInput | undefined;
}
