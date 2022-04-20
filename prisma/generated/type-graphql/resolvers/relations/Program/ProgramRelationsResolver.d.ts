import { Program } from "../../../models/Program";
import { SoftwareComputer } from "../../../models/SoftwareComputer";
export declare class ProgramRelationsResolver {
    softwarecomputer(program: Program, ctx: any): Promise<SoftwareComputer>;
}
