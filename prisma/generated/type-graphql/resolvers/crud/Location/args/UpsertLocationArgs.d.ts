import { LocationCreateInput } from "../../../inputs/LocationCreateInput";
import { LocationUpdateInput } from "../../../inputs/LocationUpdateInput";
import { LocationWhereUniqueInput } from "../../../inputs/LocationWhereUniqueInput";
export declare class UpsertLocationArgs {
    where: LocationWhereUniqueInput;
    create: LocationCreateInput;
    update: LocationUpdateInput;
}
