import { Computer } from "../../../models/Computer";
import { Location } from "../../../models/Location";
import { Product } from "../../../models/Product";
import { LocationComputerArgs } from "./args/LocationComputerArgs";
import { LocationPorductArgs } from "./args/LocationPorductArgs";
export declare class LocationRelationsResolver {
    computer(location: Location, ctx: any, args: LocationComputerArgs): Promise<Computer[]>;
    porduct(location: Location, ctx: any, args: LocationPorductArgs): Promise<Product[]>;
}
