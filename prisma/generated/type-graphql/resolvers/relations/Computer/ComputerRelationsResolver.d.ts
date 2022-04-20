import { Computer } from "../../../models/Computer";
import { PartComputer } from "../../../models/PartComputer";
import { SoftwareComputer } from "../../../models/SoftwareComputer";
import { State } from "../../../models/State";
import { ComputerPartComputerArgs } from "./args/ComputerPartComputerArgs";
export declare class ComputerRelationsResolver {
    state(computer: Computer, ctx: any): Promise<State>;
    softwarecomputer(computer: Computer, ctx: any): Promise<SoftwareComputer>;
    partComputer(computer: Computer, ctx: any, args: ComputerPartComputerArgs): Promise<PartComputer[]>;
}
