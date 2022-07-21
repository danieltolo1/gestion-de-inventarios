import { Computer } from "../../../models/Computer";
import { Location } from "../../../models/Location";
import { Maintenance } from "../../../models/Maintenance";
import { Program } from "../../../models/Program";
import { SoftwareComputer } from "../../../models/SoftwareComputer";
import { State } from "../../../models/State";
import { ComputerMaintenanceArgs } from "./args/ComputerMaintenanceArgs";
import { ComputerProgramArgs } from "./args/ComputerProgramArgs";
export declare class ComputerRelationsResolver {
    state(computer: Computer, ctx: any): Promise<State>;
    softwarecomputer(computer: Computer, ctx: any): Promise<SoftwareComputer>;
    location(computer: Computer, ctx: any): Promise<Location>;
    maintenance(computer: Computer, ctx: any, args: ComputerMaintenanceArgs): Promise<Maintenance[]>;
    program(computer: Computer, ctx: any, args: ComputerProgramArgs): Promise<Program[]>;
}
