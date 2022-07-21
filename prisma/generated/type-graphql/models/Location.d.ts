import { Computer } from "../models/Computer";
import { Product } from "../models/Product";
import { LocationCount } from "../resolvers/outputs/LocationCount";
export declare class Location {
    id_location: number;
    internal_code: number;
    city: string;
    job_name: string;
    computer?: Computer[];
    porduct?: Product[];
    _count?: LocationCount | null;
}
