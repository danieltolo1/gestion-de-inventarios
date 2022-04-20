import { PartComputerCreateNestedOneWithoutProductInput } from "../inputs/PartComputerCreateNestedOneWithoutProductInput";
import { Product_TypeCreateNestedOneWithoutProductInput } from "../inputs/Product_TypeCreateNestedOneWithoutProductInput";
import { StateCreateNestedOneWithoutProductInput } from "../inputs/StateCreateNestedOneWithoutProductInput";
export declare class ProductCreateInput {
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
    state: StateCreateNestedOneWithoutProductInput;
    partcomputer?: PartComputerCreateNestedOneWithoutProductInput | undefined;
    historial: string;
}
