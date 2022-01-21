"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateInventarioArgs_1 = require("./args/AggregateInventarioArgs");
const CreateInventarioArgs_1 = require("./args/CreateInventarioArgs");
const CreateManyInventarioArgs_1 = require("./args/CreateManyInventarioArgs");
const DeleteInventarioArgs_1 = require("./args/DeleteInventarioArgs");
const DeleteManyInventarioArgs_1 = require("./args/DeleteManyInventarioArgs");
const FindFirstInventarioArgs_1 = require("./args/FindFirstInventarioArgs");
const FindManyInventarioArgs_1 = require("./args/FindManyInventarioArgs");
const FindUniqueInventarioArgs_1 = require("./args/FindUniqueInventarioArgs");
const GroupByInventarioArgs_1 = require("./args/GroupByInventarioArgs");
const UpdateInventarioArgs_1 = require("./args/UpdateInventarioArgs");
const UpdateManyInventarioArgs_1 = require("./args/UpdateManyInventarioArgs");
const UpsertInventarioArgs_1 = require("./args/UpsertInventarioArgs");
const helpers_1 = require("../../../helpers");
const Inventario_1 = require("../../../models/Inventario");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateInventario_1 = require("../../outputs/AggregateInventario");
const InventarioGroupBy_1 = require("../../outputs/InventarioGroupBy");
let InventarioCrudResolver = class InventarioCrudResolver {
    async inventario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventario.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstInventario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventario.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async inventarios(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventario.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createInventario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventario.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyInventario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventario.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteInventario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventario.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateInventario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventario.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyInventario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventario.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyInventario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventario.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertInventario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventario.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateInventario(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).inventario.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByInventario(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventario.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Inventario_1.Inventario, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueInventarioArgs_1.FindUniqueInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InventarioCrudResolver.prototype, "inventario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Inventario_1.Inventario, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstInventarioArgs_1.FindFirstInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InventarioCrudResolver.prototype, "findFirstInventario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Inventario_1.Inventario], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyInventarioArgs_1.FindManyInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InventarioCrudResolver.prototype, "inventarios", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Inventario_1.Inventario, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateInventarioArgs_1.CreateInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InventarioCrudResolver.prototype, "createInventario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyInventarioArgs_1.CreateManyInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InventarioCrudResolver.prototype, "createManyInventario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Inventario_1.Inventario, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteInventarioArgs_1.DeleteInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InventarioCrudResolver.prototype, "deleteInventario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Inventario_1.Inventario, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateInventarioArgs_1.UpdateInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InventarioCrudResolver.prototype, "updateInventario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyInventarioArgs_1.DeleteManyInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InventarioCrudResolver.prototype, "deleteManyInventario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyInventarioArgs_1.UpdateManyInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InventarioCrudResolver.prototype, "updateManyInventario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Inventario_1.Inventario, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertInventarioArgs_1.UpsertInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InventarioCrudResolver.prototype, "upsertInventario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateInventario_1.AggregateInventario, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateInventarioArgs_1.AggregateInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InventarioCrudResolver.prototype, "aggregateInventario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [InventarioGroupBy_1.InventarioGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByInventarioArgs_1.GroupByInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InventarioCrudResolver.prototype, "groupByInventario", null);
InventarioCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Inventario_1.Inventario)
], InventarioCrudResolver);
exports.InventarioCrudResolver = InventarioCrudResolver;
