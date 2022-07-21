import { Computer } from "../../../models/Computer";
import { SoftwareComputer } from "../../../models/SoftwareComputer";
import { SoftwareComputerComputerArgs } from "./args/SoftwareComputerComputerArgs";
export declare class SoftwareComputerRelationsResolver {
    computer(softwareComputer: SoftwareComputer, ctx: any, args: SoftwareComputerComputerArgs): Promise<Computer[]>;
}
