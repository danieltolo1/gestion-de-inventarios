"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregatePartComputerArgs_1 = require("./args/AggregatePartComputerArgs");
const CreateManyPartComputerArgs_1 = require("./args/CreateManyPartComputerArgs");
const CreatePartComputerArgs_1 = require("./args/CreatePartComputerArgs");
const DeleteManyPartComputerArgs_1 = require("./args/DeleteManyPartComputerArgs");
const DeletePartComputerArgs_1 = require("./args/DeletePartComputerArgs");
const FindFirstPartComputerArgs_1 = require("./args/FindFirstPartComputerArgs");
const FindManyPartComputerArgs_1 = require("./args/FindManyPartComputerArgs");
const FindUniquePartComputerArgs_1 = require("./args/FindUniquePartComputerArgs");
const GroupByPartComputerArgs_1 = require("./args/GroupByPartComputerArgs");
const UpdateManyPartComputerArgs_1 = require("./args/UpdateManyPartComputerArgs");
const UpdatePartComputerArgs_1 = require("./args/UpdatePartComputerArgs");
const UpsertPartComputerArgs_1 = require("./args/UpsertPartComputerArgs");
const helpers_1 = require("../../../helpers");
const PartComputer_1 = require("../../../models/PartComputer");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregatePartComputer_1 = require("../../outputs/AggregatePartComputer");
const PartComputerGroupBy_1 = require("../../outputs/PartComputerGroupBy");
let PartComputerCrudResolver = class PartComputerCrudResolver {
    async partComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).partComputer.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPartComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).partComputer.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async partComputers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).partComputer.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createPartComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).partComputer.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyPartComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).partComputer.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deletePartComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).partComputer.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updatePartComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).partComputer.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyPartComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).partComputer.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyPartComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).partComputer.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertPartComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).partComputer.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregatePartComputer(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).partComputer.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByPartComputer(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).partComputer.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => PartComputer_1.PartComputer, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniquePartComputerArgs_1.FindUniquePartComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PartComputerCrudResolver.prototype, "partComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => PartComputer_1.PartComputer, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstPartComputerArgs_1.FindFirstPartComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PartComputerCrudResolver.prototype, "findFirstPartComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [PartComputer_1.PartComputer], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyPartComputerArgs_1.FindManyPartComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PartComputerCrudResolver.prototype, "partComputers", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => PartComputer_1.PartComputer, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreatePartComputerArgs_1.CreatePartComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PartComputerCrudResolver.prototype, "createPartComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyPartComputerArgs_1.CreateManyPartComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PartComputerCrudResolver.prototype, "createManyPartComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => PartComputer_1.PartComputer, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeletePartComputerArgs_1.DeletePartComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PartComputerCrudResolver.prototype, "deletePartComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => PartComputer_1.PartComputer, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdatePartComputerArgs_1.UpdatePartComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PartComputerCrudResolver.prototype, "updatePartComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyPartComputerArgs_1.DeleteManyPartComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PartComputerCrudResolver.prototype, "deleteManyPartComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyPartComputerArgs_1.UpdateManyPartComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PartComputerCrudResolver.prototype, "updateManyPartComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => PartComputer_1.PartComputer, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertPartComputerArgs_1.UpsertPartComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PartComputerCrudResolver.prototype, "upsertPartComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregatePartComputer_1.AggregatePartComputer, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregatePartComputerArgs_1.AggregatePartComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PartComputerCrudResolver.prototype, "aggregatePartComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [PartComputerGroupBy_1.PartComputerGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByPartComputerArgs_1.GroupByPartComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PartComputerCrudResolver.prototype, "groupByPartComputer", null);
PartComputerCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => PartComputer_1.PartComputer)
], PartComputerCrudResolver);
exports.PartComputerCrudResolver = PartComputerCrudResolver;
