import { Computer } from "../../../models/Computer";
import { Maintenance } from "../../../models/Maintenance";
import { Product } from "../../../models/Product";
import { User } from "../../../models/User";
import { MaintenanceProductArgs } from "./args/MaintenanceProductArgs";
export declare class MaintenanceRelationsResolver {
    user(maintenance: Maintenance, ctx: any): Promise<User>;
    computer(maintenance: Maintenance, ctx: any): Promise<Computer>;
    product(maintenance: Maintenance, ctx: any, args: MaintenanceProductArgs): Promise<Product[]>;
}
