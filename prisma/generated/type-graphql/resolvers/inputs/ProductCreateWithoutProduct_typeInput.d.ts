import { LocationCreateNestedOneWithoutPorductInput } from "../inputs/LocationCreateNestedOneWithoutPorductInput";
import { MaintenanceCreateNestedManyWithoutProductInput } from "../inputs/MaintenanceCreateNestedManyWithoutProductInput";
import { StateCreateNestedOneWithoutProductInput } from "../inputs/StateCreateNestedOneWithoutProductInput";
export declare class ProductCreateWithoutProduct_typeInput {
    internal_code: string;
    serial_number?: string | undefined;
    imei?: string | undefined;
    observation?: string | undefined;
    picture?: string | undefined;
    model?: string | undefined;
    size?: string | undefined;
    tecnology?: string | undefined;
    conectivity?: string | undefined;
    state: StateCreateNestedOneWithoutProductInput;
    location: LocationCreateNestedOneWithoutPorductInput;
    historial: string;
    maintenance?: MaintenanceCreateNestedManyWithoutProductInput | undefined;
}
