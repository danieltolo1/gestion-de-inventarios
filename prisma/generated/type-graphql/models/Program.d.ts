import { Computer } from "../models/Computer";
import { ProgramCount } from "../resolvers/outputs/ProgramCount";
export declare class Program {
    id_program: number;
    name_program: string;
    version_program?: string | null;
    license_program?: string | null;
    computer?: Computer[];
    _count?: ProgramCount | null;
}
