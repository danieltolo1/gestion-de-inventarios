import { Computer } from "../../../models/Computer";
import { Program } from "../../../models/Program";
import { ProgramComputerArgs } from "./args/ProgramComputerArgs";
export declare class ProgramRelationsResolver {
    computer(program: Program, ctx: any, args: ProgramComputerArgs): Promise<Computer[]>;
}
