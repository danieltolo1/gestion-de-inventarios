"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateMovimientoInventarioArgs_1 = require("./args/AggregateMovimientoInventarioArgs");
const CreateManyMovimientoInventarioArgs_1 = require("./args/CreateManyMovimientoInventarioArgs");
const CreateMovimientoInventarioArgs_1 = require("./args/CreateMovimientoInventarioArgs");
const DeleteManyMovimientoInventarioArgs_1 = require("./args/DeleteManyMovimientoInventarioArgs");
const DeleteMovimientoInventarioArgs_1 = require("./args/DeleteMovimientoInventarioArgs");
const FindFirstMovimientoInventarioArgs_1 = require("./args/FindFirstMovimientoInventarioArgs");
const FindManyMovimientoInventarioArgs_1 = require("./args/FindManyMovimientoInventarioArgs");
const FindUniqueMovimientoInventarioArgs_1 = require("./args/FindUniqueMovimientoInventarioArgs");
const GroupByMovimientoInventarioArgs_1 = require("./args/GroupByMovimientoInventarioArgs");
const UpdateManyMovimientoInventarioArgs_1 = require("./args/UpdateManyMovimientoInventarioArgs");
const UpdateMovimientoInventarioArgs_1 = require("./args/UpdateMovimientoInventarioArgs");
const UpsertMovimientoInventarioArgs_1 = require("./args/UpsertMovimientoInventarioArgs");
const helpers_1 = require("../../../helpers");
const MovimientoInventario_1 = require("../../../models/MovimientoInventario");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateMovimientoInventario_1 = require("../../outputs/AggregateMovimientoInventario");
const MovimientoInventarioGroupBy_1 = require("../../outputs/MovimientoInventarioGroupBy");
let MovimientoInventarioCrudResolver = class MovimientoInventarioCrudResolver {
    async movimientoInventario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).movimientoInventario.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstMovimientoInventario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).movimientoInventario.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async movimientoInventarios(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).movimientoInventario.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createMovimientoInventario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).movimientoInventario.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyMovimientoInventario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).movimientoInventario.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteMovimientoInventario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).movimientoInventario.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateMovimientoInventario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).movimientoInventario.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyMovimientoInventario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).movimientoInventario.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyMovimientoInventario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).movimientoInventario.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertMovimientoInventario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).movimientoInventario.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateMovimientoInventario(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).movimientoInventario.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByMovimientoInventario(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).movimientoInventario.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => MovimientoInventario_1.MovimientoInventario, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueMovimientoInventarioArgs_1.FindUniqueMovimientoInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MovimientoInventarioCrudResolver.prototype, "movimientoInventario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => MovimientoInventario_1.MovimientoInventario, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstMovimientoInventarioArgs_1.FindFirstMovimientoInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MovimientoInventarioCrudResolver.prototype, "findFirstMovimientoInventario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [MovimientoInventario_1.MovimientoInventario], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyMovimientoInventarioArgs_1.FindManyMovimientoInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MovimientoInventarioCrudResolver.prototype, "movimientoInventarios", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => MovimientoInventario_1.MovimientoInventario, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateMovimientoInventarioArgs_1.CreateMovimientoInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MovimientoInventarioCrudResolver.prototype, "createMovimientoInventario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyMovimientoInventarioArgs_1.CreateManyMovimientoInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MovimientoInventarioCrudResolver.prototype, "createManyMovimientoInventario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => MovimientoInventario_1.MovimientoInventario, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteMovimientoInventarioArgs_1.DeleteMovimientoInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MovimientoInventarioCrudResolver.prototype, "deleteMovimientoInventario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => MovimientoInventario_1.MovimientoInventario, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateMovimientoInventarioArgs_1.UpdateMovimientoInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MovimientoInventarioCrudResolver.prototype, "updateMovimientoInventario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyMovimientoInventarioArgs_1.DeleteManyMovimientoInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MovimientoInventarioCrudResolver.prototype, "deleteManyMovimientoInventario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyMovimientoInventarioArgs_1.UpdateManyMovimientoInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MovimientoInventarioCrudResolver.prototype, "updateManyMovimientoInventario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => MovimientoInventario_1.MovimientoInventario, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertMovimientoInventarioArgs_1.UpsertMovimientoInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MovimientoInventarioCrudResolver.prototype, "upsertMovimientoInventario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateMovimientoInventario_1.AggregateMovimientoInventario, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateMovimientoInventarioArgs_1.AggregateMovimientoInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MovimientoInventarioCrudResolver.prototype, "aggregateMovimientoInventario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [MovimientoInventarioGroupBy_1.MovimientoInventarioGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByMovimientoInventarioArgs_1.GroupByMovimientoInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MovimientoInventarioCrudResolver.prototype, "groupByMovimientoInventario", null);
MovimientoInventarioCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => MovimientoInventario_1.MovimientoInventario)
], MovimientoInventarioCrudResolver);
exports.MovimientoInventarioCrudResolver = MovimientoInventarioCrudResolver;
