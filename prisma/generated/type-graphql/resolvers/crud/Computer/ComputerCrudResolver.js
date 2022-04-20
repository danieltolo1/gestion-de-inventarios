"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateComputerArgs_1 = require("./args/AggregateComputerArgs");
const CreateComputerArgs_1 = require("./args/CreateComputerArgs");
const CreateManyComputerArgs_1 = require("./args/CreateManyComputerArgs");
const DeleteComputerArgs_1 = require("./args/DeleteComputerArgs");
const DeleteManyComputerArgs_1 = require("./args/DeleteManyComputerArgs");
const FindFirstComputerArgs_1 = require("./args/FindFirstComputerArgs");
const FindManyComputerArgs_1 = require("./args/FindManyComputerArgs");
const FindUniqueComputerArgs_1 = require("./args/FindUniqueComputerArgs");
const GroupByComputerArgs_1 = require("./args/GroupByComputerArgs");
const UpdateComputerArgs_1 = require("./args/UpdateComputerArgs");
const UpdateManyComputerArgs_1 = require("./args/UpdateManyComputerArgs");
const UpsertComputerArgs_1 = require("./args/UpsertComputerArgs");
const helpers_1 = require("../../../helpers");
const Computer_1 = require("../../../models/Computer");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateComputer_1 = require("../../outputs/AggregateComputer");
const ComputerGroupBy_1 = require("../../outputs/ComputerGroupBy");
let ComputerCrudResolver = class ComputerCrudResolver {
    async computer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).computer.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).computer.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async computers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).computer.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).computer.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).computer.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).computer.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).computer.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).computer.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).computer.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).computer.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateComputer(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).computer.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByComputer(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).computer.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Computer_1.Computer, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueComputerArgs_1.FindUniqueComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ComputerCrudResolver.prototype, "computer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Computer_1.Computer, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstComputerArgs_1.FindFirstComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ComputerCrudResolver.prototype, "findFirstComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Computer_1.Computer], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyComputerArgs_1.FindManyComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ComputerCrudResolver.prototype, "computers", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Computer_1.Computer, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateComputerArgs_1.CreateComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ComputerCrudResolver.prototype, "createComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyComputerArgs_1.CreateManyComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ComputerCrudResolver.prototype, "createManyComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Computer_1.Computer, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteComputerArgs_1.DeleteComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ComputerCrudResolver.prototype, "deleteComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Computer_1.Computer, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateComputerArgs_1.UpdateComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ComputerCrudResolver.prototype, "updateComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyComputerArgs_1.DeleteManyComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ComputerCrudResolver.prototype, "deleteManyComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyComputerArgs_1.UpdateManyComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ComputerCrudResolver.prototype, "updateManyComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Computer_1.Computer, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertComputerArgs_1.UpsertComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ComputerCrudResolver.prototype, "upsertComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateComputer_1.AggregateComputer, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateComputerArgs_1.AggregateComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ComputerCrudResolver.prototype, "aggregateComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [ComputerGroupBy_1.ComputerGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByComputerArgs_1.GroupByComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ComputerCrudResolver.prototype, "groupByComputer", null);
ComputerCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Computer_1.Computer)
], ComputerCrudResolver);
exports.ComputerCrudResolver = ComputerCrudResolver;
