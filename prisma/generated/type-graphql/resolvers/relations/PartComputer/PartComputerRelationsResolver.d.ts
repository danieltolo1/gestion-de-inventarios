import { Computer } from "../../../models/Computer";
import { Location } from "../../../models/Location";
import { Maintenance } from "../../../models/Maintenance";
import { PartComputer } from "../../../models/PartComputer";
import { Product } from "../../../models/Product";
export declare class PartComputerRelationsResolver {
    product(partComputer: PartComputer, ctx: any): Promise<Product>;
    computer(partComputer: PartComputer, ctx: any): Promise<Computer>;
    location(partComputer: PartComputer, ctx: any): Promise<Location>;
    maintenance(partComputer: PartComputer, ctx: any): Promise<Maintenance>;
}
