import { GraphQLResolveInfo } from "graphql";
import { AggregateMovimientoInventarioArgs } from "./args/AggregateMovimientoInventarioArgs";
import { CreateManyMovimientoInventarioArgs } from "./args/CreateManyMovimientoInventarioArgs";
import { CreateMovimientoInventarioArgs } from "./args/CreateMovimientoInventarioArgs";
import { DeleteManyMovimientoInventarioArgs } from "./args/DeleteManyMovimientoInventarioArgs";
import { DeleteMovimientoInventarioArgs } from "./args/DeleteMovimientoInventarioArgs";
import { FindFirstMovimientoInventarioArgs } from "./args/FindFirstMovimientoInventarioArgs";
import { FindManyMovimientoInventarioArgs } from "./args/FindManyMovimientoInventarioArgs";
import { FindUniqueMovimientoInventarioArgs } from "./args/FindUniqueMovimientoInventarioArgs";
import { GroupByMovimientoInventarioArgs } from "./args/GroupByMovimientoInventarioArgs";
import { UpdateManyMovimientoInventarioArgs } from "./args/UpdateManyMovimientoInventarioArgs";
import { UpdateMovimientoInventarioArgs } from "./args/UpdateMovimientoInventarioArgs";
import { UpsertMovimientoInventarioArgs } from "./args/UpsertMovimientoInventarioArgs";
import { MovimientoInventario } from "../../../models/MovimientoInventario";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMovimientoInventario } from "../../outputs/AggregateMovimientoInventario";
import { MovimientoInventarioGroupBy } from "../../outputs/MovimientoInventarioGroupBy";
export declare class MovimientoInventarioCrudResolver {
    movimientoInventario(ctx: any, info: GraphQLResolveInfo, args: FindUniqueMovimientoInventarioArgs): Promise<MovimientoInventario | null>;
    findFirstMovimientoInventario(ctx: any, info: GraphQLResolveInfo, args: FindFirstMovimientoInventarioArgs): Promise<MovimientoInventario | null>;
    movimientoInventarios(ctx: any, info: GraphQLResolveInfo, args: FindManyMovimientoInventarioArgs): Promise<MovimientoInventario[]>;
    createMovimientoInventario(ctx: any, info: GraphQLResolveInfo, args: CreateMovimientoInventarioArgs): Promise<MovimientoInventario>;
    createManyMovimientoInventario(ctx: any, info: GraphQLResolveInfo, args: CreateManyMovimientoInventarioArgs): Promise<AffectedRowsOutput>;
    deleteMovimientoInventario(ctx: any, info: GraphQLResolveInfo, args: DeleteMovimientoInventarioArgs): Promise<MovimientoInventario | null>;
    updateMovimientoInventario(ctx: any, info: GraphQLResolveInfo, args: UpdateMovimientoInventarioArgs): Promise<MovimientoInventario | null>;
    deleteManyMovimientoInventario(ctx: any, info: GraphQLResolveInfo, args: DeleteManyMovimientoInventarioArgs): Promise<AffectedRowsOutput>;
    updateManyMovimientoInventario(ctx: any, info: GraphQLResolveInfo, args: UpdateManyMovimientoInventarioArgs): Promise<AffectedRowsOutput>;
    upsertMovimientoInventario(ctx: any, info: GraphQLResolveInfo, args: UpsertMovimientoInventarioArgs): Promise<MovimientoInventario>;
    aggregateMovimientoInventario(ctx: any, info: GraphQLResolveInfo, args: AggregateMovimientoInventarioArgs): Promise<AggregateMovimientoInventario>;
    groupByMovimientoInventario(ctx: any, info: GraphQLResolveInfo, args: GroupByMovimientoInventarioArgs): Promise<MovimientoInventarioGroupBy[]>;
}
