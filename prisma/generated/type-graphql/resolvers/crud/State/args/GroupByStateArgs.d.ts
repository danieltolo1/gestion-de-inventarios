import { StateOrderByWithAggregationInput } from "../../../inputs/StateOrderByWithAggregationInput";
import { StateScalarWhereWithAggregatesInput } from "../../../inputs/StateScalarWhereWithAggregatesInput";
import { StateWhereInput } from "../../../inputs/StateWhereInput";
export declare class GroupByStateArgs {
    where?: StateWhereInput | undefined;
    orderBy?: StateOrderByWithAggregationInput[] | undefined;
    by: Array<"id_state" | "description">;
    having?: StateScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
