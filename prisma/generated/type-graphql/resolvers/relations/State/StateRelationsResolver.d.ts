import { Computer } from "../../../models/Computer";
import { Product } from "../../../models/Product";
import { State } from "../../../models/State";
import { StateComputerArgs } from "./args/StateComputerArgs";
import { StateProductArgs } from "./args/StateProductArgs";
export declare class StateRelationsResolver {
    product(state: State, ctx: any, args: StateProductArgs): Promise<Product[]>;
    computer(state: State, ctx: any, args: StateComputerArgs): Promise<Computer[]>;
}
