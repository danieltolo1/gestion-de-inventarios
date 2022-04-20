import { ComputerOrderByWithRelationInput } from "../inputs/ComputerOrderByWithRelationInput";
import { LocationOrderByWithRelationInput } from "../inputs/LocationOrderByWithRelationInput";
import { MaintenanceOrderByWithRelationInput } from "../inputs/MaintenanceOrderByWithRelationInput";
import { ProductOrderByWithRelationInput } from "../inputs/ProductOrderByWithRelationInput";
export declare class PartComputerOrderByWithRelationInput {
    id_partComputer?: "asc" | "desc" | undefined;
    product?: ProductOrderByWithRelationInput | undefined;
    productId?: "asc" | "desc" | undefined;
    computer?: ComputerOrderByWithRelationInput | undefined;
    computerId?: "asc" | "desc" | undefined;
    location?: LocationOrderByWithRelationInput | undefined;
    locationId?: "asc" | "desc" | undefined;
    maintenance?: MaintenanceOrderByWithRelationInput | undefined;
    maintenanceId?: "asc" | "desc" | undefined;
    name_part?: "asc" | "desc" | undefined;
}
