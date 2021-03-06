import { GraphQLResolveInfo } from "graphql";
import { AggregateStateArgs } from "./args/AggregateStateArgs";
import { CreateManyStateArgs } from "./args/CreateManyStateArgs";
import { CreateStateArgs } from "./args/CreateStateArgs";
import { DeleteManyStateArgs } from "./args/DeleteManyStateArgs";
import { DeleteStateArgs } from "./args/DeleteStateArgs";
import { FindFirstStateArgs } from "./args/FindFirstStateArgs";
import { FindManyStateArgs } from "./args/FindManyStateArgs";
import { FindUniqueStateArgs } from "./args/FindUniqueStateArgs";
import { GroupByStateArgs } from "./args/GroupByStateArgs";
import { UpdateManyStateArgs } from "./args/UpdateManyStateArgs";
import { UpdateStateArgs } from "./args/UpdateStateArgs";
import { UpsertStateArgs } from "./args/UpsertStateArgs";
import { State } from "../../../models/State";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateState } from "../../outputs/AggregateState";
import { StateGroupBy } from "../../outputs/StateGroupBy";
export declare class StateCrudResolver {
    state(ctx: any, info: GraphQLResolveInfo, args: FindUniqueStateArgs): Promise<State | null>;
    findFirstState(ctx: any, info: GraphQLResolveInfo, args: FindFirstStateArgs): Promise<State | null>;
    states(ctx: any, info: GraphQLResolveInfo, args: FindManyStateArgs): Promise<State[]>;
    createState(ctx: any, info: GraphQLResolveInfo, args: CreateStateArgs): Promise<State>;
    createManyState(ctx: any, info: GraphQLResolveInfo, args: CreateManyStateArgs): Promise<AffectedRowsOutput>;
    deleteState(ctx: any, info: GraphQLResolveInfo, args: DeleteStateArgs): Promise<State | null>;
    updateState(ctx: any, info: GraphQLResolveInfo, args: UpdateStateArgs): Promise<State | null>;
    deleteManyState(ctx: any, info: GraphQLResolveInfo, args: DeleteManyStateArgs): Promise<AffectedRowsOutput>;
    updateManyState(ctx: any, info: GraphQLResolveInfo, args: UpdateManyStateArgs): Promise<AffectedRowsOutput>;
    upsertState(ctx: any, info: GraphQLResolveInfo, args: UpsertStateArgs): Promise<State>;
    aggregateState(ctx: any, info: GraphQLResolveInfo, args: AggregateStateArgs): Promise<AggregateState>;
    groupByState(ctx: any, info: GraphQLResolveInfo, args: GroupByStateArgs): Promise<StateGroupBy[]>;
}
