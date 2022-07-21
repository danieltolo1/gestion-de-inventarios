import { ComputerListRelationFilter } from "../inputs/ComputerListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class LocationWhereInput {
    AND?: LocationWhereInput[] | undefined;
    OR?: LocationWhereInput[] | undefined;
    NOT?: LocationWhereInput[] | undefined;
    id_location?: IntFilter | undefined;
    internal_code?: IntFilter | undefined;
    city?: StringFilter | undefined;
    job_name?: StringFilter | undefined;
    computer?: ComputerListRelationFilter | undefined;
    porduct?: ProductListRelationFilter | undefined;
}
