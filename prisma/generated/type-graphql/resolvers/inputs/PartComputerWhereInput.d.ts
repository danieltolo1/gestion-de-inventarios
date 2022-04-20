import { ComputerRelationFilter } from "../inputs/ComputerRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LocationRelationFilter } from "../inputs/LocationRelationFilter";
import { MaintenanceRelationFilter } from "../inputs/MaintenanceRelationFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class PartComputerWhereInput {
    AND?: PartComputerWhereInput[] | undefined;
    OR?: PartComputerWhereInput[] | undefined;
    NOT?: PartComputerWhereInput[] | undefined;
    id_partComputer?: IntFilter | undefined;
    product?: ProductRelationFilter | undefined;
    productId?: IntFilter | undefined;
    computer?: ComputerRelationFilter | undefined;
    computerId?: IntFilter | undefined;
    location?: LocationRelationFilter | undefined;
    locationId?: IntFilter | undefined;
    maintenance?: MaintenanceRelationFilter | undefined;
    maintenanceId?: IntFilter | undefined;
    name_part?: StringNullableFilter | undefined;
}
