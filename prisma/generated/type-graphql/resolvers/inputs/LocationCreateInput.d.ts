import { PartComputerCreateNestedManyWithoutLocationInput } from "../inputs/PartComputerCreateNestedManyWithoutLocationInput";
export declare class LocationCreateInput {
    city: string;
    job_name: string;
    partComputer?: PartComputerCreateNestedManyWithoutLocationInput | undefined;
}
