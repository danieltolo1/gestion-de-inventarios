import { StateOrderByWithRelationInput } from "../../../inputs/StateOrderByWithRelationInput";
import { StateWhereInput } from "../../../inputs/StateWhereInput";
import { StateWhereUniqueInput } from "../../../inputs/StateWhereUniqueInput";
export declare class AggregateStateArgs {
    where?: StateWhereInput | undefined;
    orderBy?: StateOrderByWithRelationInput[] | undefined;
    cursor?: StateWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
