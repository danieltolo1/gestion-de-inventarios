import { PartComputer } from "../models/PartComputer";
import { Product_Type } from "../models/Product_Type";
import { State } from "../models/State";
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
    partcomputer?: PartComputer | null;
    historial: string;
}
