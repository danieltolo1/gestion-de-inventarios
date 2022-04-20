import { PartComputerCreateNestedOneWithoutProductInput } from "../inputs/PartComputerCreateNestedOneWithoutProductInput";
import { Product_TypeCreateNestedOneWithoutProductInput } from "../inputs/Product_TypeCreateNestedOneWithoutProductInput";
export declare class ProductCreateWithoutStateInput {
    internal_code: string;
    serial_number?: string | undefined;
    imei?: string | undefined;
    observation?: string | undefined;
    picture?: string | undefined;
    model?: string | undefined;
    product_type: Product_TypeCreateNestedOneWithoutProductInput;
    size?: string | undefined;
    tecnology?: string | undefined;
    conectivity?: string | undefined;
    partcomputer?: PartComputerCreateNestedOneWithoutProductInput | undefined;
    historial: string;
}
