import { Computer } from "../models/Computer";
import { Location } from "../models/Location";
import { Maintenance } from "../models/Maintenance";
import { Product } from "../models/Product";
export declare class PartComputer {
    id_partComputer: number;
    product?: Product;
    productId: number;
    computer?: Computer;
    computerId: number;
    location?: Location;
    locationId: number;
    maintenance?: Maintenance;
    maintenanceId: number;
    name_part?: string | null;
}
