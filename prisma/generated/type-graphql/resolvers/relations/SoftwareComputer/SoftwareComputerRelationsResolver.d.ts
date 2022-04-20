import { Computer } from "../../../models/Computer";
import { Program } from "../../../models/Program";
import { SoftwareComputer } from "../../../models/SoftwareComputer";
import { SoftwareComputerComputerArgs } from "./args/SoftwareComputerComputerArgs";
import { SoftwareComputerProgramArgs } from "./args/SoftwareComputerProgramArgs";
export declare class SoftwareComputerRelationsResolver {
    computer(softwareComputer: SoftwareComputer, ctx: any, args: SoftwareComputerComputerArgs): Promise<Computer[]>;
    program(softwareComputer: SoftwareComputer, ctx: any, args: SoftwareComputerProgramArgs): Promise<Program[]>;
}
