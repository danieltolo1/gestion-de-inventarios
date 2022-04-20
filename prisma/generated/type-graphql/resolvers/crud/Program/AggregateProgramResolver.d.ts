import { GraphQLResolveInfo } from "graphql";
import { AggregateProgramArgs } from "./args/AggregateProgramArgs";
import { AggregateProgram } from "../../outputs/AggregateProgram";
export declare class AggregateProgramResolver {
    aggregateProgram(ctx: any, info: GraphQLResolveInfo, args: AggregateProgramArgs): Promise<AggregateProgram>;
}
