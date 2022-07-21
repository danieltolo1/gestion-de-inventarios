import { Location } from "../models/Location";
import { Maintenance } from "../models/Maintenance";
import { Product_Type } from "../models/Product_Type";
import { State } from "../models/State";
import { ProductCount } from "../resolvers/outputs/ProductCount";
export declare class Product {
    id_product: number;
    internal_code: string;
    serial_number?: string | null;
    imei?: string | null;
    observation?: string | null;
    picture?: string | null;
    model?: string | null;
    product_type?: Product_Type;
    product_typeId: number;
    size?: string | null;
    tecnology?: string | null;
    conectivity?: string | null;
    state?: State;
    stateId: number;
    location?: Location;
    locationId: number;
    historial: string;
    maintenance?: Maintenance[];
    _count?: ProductCount | null;
}
