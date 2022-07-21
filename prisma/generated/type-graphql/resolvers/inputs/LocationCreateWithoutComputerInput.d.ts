import { ProductCreateNestedManyWithoutLocationInput } from "../inputs/ProductCreateNestedManyWithoutLocationInput";
export declare class LocationCreateWithoutComputerInput {
    internal_code: number;
    city: string;
    job_name: string;
    porduct?: ProductCreateNestedManyWithoutLocationInput | undefined;
}
