import { IntFilter } from "../inputs/IntFilter";
import { PartComputerListRelationFilter } from "../inputs/PartComputerListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class LocationWhereInput {
    AND?: LocationWhereInput[] | undefined;
    OR?: LocationWhereInput[] | undefined;
    NOT?: LocationWhereInput[] | undefined;
    id_location?: IntFilter | undefined;
    city?: StringFilter | undefined;
    job_name?: StringFilter | undefined;
    partComputer?: PartComputerListRelationFilter | undefined;
}
