import { Computer } from "../models/Computer";
import { Product } from "../models/Product";
import { StateCount } from "../resolvers/outputs/StateCount";
export declare class State {
    id_state: number;
    description: string;
    product?: Product[];
    computer?: Computer[];
    _count?: StateCount | null;
}
