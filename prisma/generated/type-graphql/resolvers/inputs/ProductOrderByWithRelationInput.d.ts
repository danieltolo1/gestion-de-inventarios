import { PartComputerOrderByWithRelationInput } from "../inputs/PartComputerOrderByWithRelationInput";
import { Product_TypeOrderByWithRelationInput } from "../inputs/Product_TypeOrderByWithRelationInput";
import { StateOrderByWithRelationInput } from "../inputs/StateOrderByWithRelationInput";
export declare class ProductOrderByWithRelationInput {
    id_product?: "asc" | "desc" | undefined;
    internal_code?: "asc" | "desc" | undefined;
    serial_number?: "asc" | "desc" | undefined;
    imei?: "asc" | "desc" | undefined;
    observation?: "asc" | "desc" | undefined;
    picture?: "asc" | "desc" | undefined;
    model?: "asc" | "desc" | undefined;
    product_type?: Product_TypeOrderByWithRelationInput | undefined;
    product_typeId?: "asc" | "desc" | undefined;
    size?: "asc" | "desc" | undefined;
    tecnology?: "asc" | "desc" | undefined;
    conectivity?: "asc" | "desc" | undefined;
    state?: StateOrderByWithRelationInput | undefined;
    stateId?: "asc" | "desc" | undefined;
    partcomputer?: PartComputerOrderByWithRelationInput | undefined;
    historial?: "asc" | "desc" | undefined;
}
