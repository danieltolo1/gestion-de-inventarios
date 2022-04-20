import { Location } from "../../../models/Location";
import { PartComputer } from "../../../models/PartComputer";
import { LocationPartComputerArgs } from "./args/LocationPartComputerArgs";
export declare class LocationRelationsResolver {
    partComputer(location: Location, ctx: any, args: LocationPartComputerArgs): Promise<PartComputer[]>;
}
