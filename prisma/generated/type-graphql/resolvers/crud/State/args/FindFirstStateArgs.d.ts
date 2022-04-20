import { StateOrderByWithRelationInput } from "../../../inputs/StateOrderByWithRelationInput";
import { StateWhereInput } from "../../../inputs/StateWhereInput";
import { StateWhereUniqueInput } from "../../../inputs/StateWhereUniqueInput";
export declare class FindFirstStateArgs {
    where?: StateWhereInput | undefined;
    orderBy?: StateOrderByWithRelationInput[] | undefined;
    cursor?: StateWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id_state" | "description"> | undefined;
}
