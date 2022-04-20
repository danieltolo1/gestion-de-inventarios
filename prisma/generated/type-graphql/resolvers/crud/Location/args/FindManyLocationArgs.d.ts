import { LocationOrderByWithRelationInput } from "../../../inputs/LocationOrderByWithRelationInput";
import { LocationWhereInput } from "../../../inputs/LocationWhereInput";
import { LocationWhereUniqueInput } from "../../../inputs/LocationWhereUniqueInput";
export declare class FindManyLocationArgs {
    where?: LocationWhereInput | undefined;
    orderBy?: LocationOrderByWithRelationInput[] | undefined;
    cursor?: LocationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id_location" | "city" | "job_name"> | undefined;
}
