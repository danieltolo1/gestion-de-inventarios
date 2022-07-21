import { Location } from "../../../models/Location";
import { Maintenance } from "../../../models/Maintenance";
import { Product } from "../../../models/Product";
import { Product_Type } from "../../../models/Product_Type";
import { State } from "../../../models/State";
import { ProductMaintenanceArgs } from "./args/ProductMaintenanceArgs";
export declare class ProductRelationsResolver {
    product_type(product: Product, ctx: any): Promise<Product_Type>;
    state(product: Product, ctx: any): Promise<State>;
    location(product: Product, ctx: any): Promise<Location>;
    maintenance(product: Product, ctx: any, args: ProductMaintenanceArgs): Promise<Maintenance[]>;
}
