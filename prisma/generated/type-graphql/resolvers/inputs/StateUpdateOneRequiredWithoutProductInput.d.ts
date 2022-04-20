import { StateCreateOrConnectWithoutProductInput } from "../inputs/StateCreateOrConnectWithoutProductInput";
import { StateCreateWithoutProductInput } from "../inputs/StateCreateWithoutProductInput";
import { StateUpdateWithoutProductInput } from "../inputs/StateUpdateWithoutProductInput";
import { StateUpsertWithoutProductInput } from "../inputs/StateUpsertWithoutProductInput";
import { StateWhereUniqueInput } from "../inputs/StateWhereUniqueInput";
export declare class StateUpdateOneRequiredWithoutProductInput {
    create?: StateCreateWithoutProductInput | undefined;
    connectOrCreate?: StateCreateOrConnectWithoutProductInput | undefined;
    upsert?: StateUpsertWithoutProductInput | undefined;
    connect?: StateWhereUniqueInput | undefined;
    update?: StateUpdateWithoutProductInput | undefined;
}
