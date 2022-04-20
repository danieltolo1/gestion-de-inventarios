import { ComputerListRelationFilter } from "../inputs/ComputerListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class StateWhereInput {
    AND?: StateWhereInput[] | undefined;
    OR?: StateWhereInput[] | undefined;
    NOT?: StateWhereInput[] | undefined;
    id_state?: IntFilter | undefined;
    description?: StringFilter | undefined;
    product?: ProductListRelationFilter | undefined;
    computer?: ComputerListRelationFilter | undefined;
}
