import { ComputerCreateNestedManyWithoutLocationInput } from "../inputs/ComputerCreateNestedManyWithoutLocationInput";
export declare class LocationCreateWithoutPorductInput {
    internal_code: number;
    city: string;
    job_name: string;
    computer?: ComputerCreateNestedManyWithoutLocationInput | undefined;
}
