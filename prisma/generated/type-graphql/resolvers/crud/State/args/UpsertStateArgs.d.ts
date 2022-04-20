import { StateCreateInput } from "../../../inputs/StateCreateInput";
import { StateUpdateInput } from "../../../inputs/StateUpdateInput";
import { StateWhereUniqueInput } from "../../../inputs/StateWhereUniqueInput";
export declare class UpsertStateArgs {
    where: StateWhereUniqueInput;
    create: StateCreateInput;
    update: StateUpdateInput;
}
