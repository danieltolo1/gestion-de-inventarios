import { PartComputer } from "../models/PartComputer";
import { LocationCount } from "../resolvers/outputs/LocationCount";
export declare class Location {
    id_location: number;
    city: string;
    job_name: string;
    partComputer?: PartComputer[];
    _count?: LocationCount | null;
}
