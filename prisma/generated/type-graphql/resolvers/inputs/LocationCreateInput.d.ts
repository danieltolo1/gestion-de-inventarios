import { ComputerCreateNestedManyWithoutLocationInput } from "../inputs/ComputerCreateNestedManyWithoutLocationInput";
import { ProductCreateNestedManyWithoutLocationInput } from "../inputs/ProductCreateNestedManyWithoutLocationInput";
export declare class LocationCreateInput {
    internal_code: number;
    city: string;
    job_name: string;
    computer?: ComputerCreateNestedManyWithoutLocationInput | undefined;
    porduct?: ProductCreateNestedManyWithoutLocationInput | undefined;
}
