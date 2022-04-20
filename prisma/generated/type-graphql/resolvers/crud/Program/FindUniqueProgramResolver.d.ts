import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProgramArgs } from "./args/FindUniqueProgramArgs";
import { Program } from "../../../models/Program";
export declare class FindUniqueProgramResolver {
    program(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProgramArgs): Promise<Program | null>;
}
