import { Maintenance } from "../../../models/Maintenance";
import { PartComputer } from "../../../models/PartComputer";
import { User } from "../../../models/User";
import { MaintenancePartComputerArgs } from "./args/MaintenancePartComputerArgs";
export declare class MaintenanceRelationsResolver {
    user(maintenance: Maintenance, ctx: any): Promise<User>;
    partComputer(maintenance: Maintenance, ctx: any, args: MaintenancePartComputerArgs): Promise<PartComputer[]>;
}
