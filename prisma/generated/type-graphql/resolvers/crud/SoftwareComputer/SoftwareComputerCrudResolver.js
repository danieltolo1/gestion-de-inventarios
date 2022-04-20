"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateSoftwareComputerArgs_1 = require("./args/AggregateSoftwareComputerArgs");
const CreateManySoftwareComputerArgs_1 = require("./args/CreateManySoftwareComputerArgs");
const CreateSoftwareComputerArgs_1 = require("./args/CreateSoftwareComputerArgs");
const DeleteManySoftwareComputerArgs_1 = require("./args/DeleteManySoftwareComputerArgs");
const DeleteSoftwareComputerArgs_1 = require("./args/DeleteSoftwareComputerArgs");
const FindFirstSoftwareComputerArgs_1 = require("./args/FindFirstSoftwareComputerArgs");
const FindManySoftwareComputerArgs_1 = require("./args/FindManySoftwareComputerArgs");
const FindUniqueSoftwareComputerArgs_1 = require("./args/FindUniqueSoftwareComputerArgs");
const GroupBySoftwareComputerArgs_1 = require("./args/GroupBySoftwareComputerArgs");
const UpdateManySoftwareComputerArgs_1 = require("./args/UpdateManySoftwareComputerArgs");
const UpdateSoftwareComputerArgs_1 = require("./args/UpdateSoftwareComputerArgs");
const UpsertSoftwareComputerArgs_1 = require("./args/UpsertSoftwareComputerArgs");
const helpers_1 = require("../../../helpers");
const SoftwareComputer_1 = require("../../../models/SoftwareComputer");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSoftwareComputer_1 = require("../../outputs/AggregateSoftwareComputer");
const SoftwareComputerGroupBy_1 = require("../../outputs/SoftwareComputerGroupBy");
let SoftwareComputerCrudResolver = class SoftwareComputerCrudResolver {
    async softwareComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).softwareComputer.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSoftwareComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).softwareComputer.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async softwareComputers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).softwareComputer.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createSoftwareComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).softwareComputer.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManySoftwareComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).softwareComputer.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteSoftwareComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).softwareComputer.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateSoftwareComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).softwareComputer.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySoftwareComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).softwareComputer.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManySoftwareComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).softwareComputer.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertSoftwareComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).softwareComputer.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateSoftwareComputer(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).softwareComputer.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupBySoftwareComputer(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).softwareComputer.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => SoftwareComputer_1.SoftwareComputer, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueSoftwareComputerArgs_1.FindUniqueSoftwareComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SoftwareComputerCrudResolver.prototype, "softwareComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => SoftwareComputer_1.SoftwareComputer, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstSoftwareComputerArgs_1.FindFirstSoftwareComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SoftwareComputerCrudResolver.prototype, "findFirstSoftwareComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [SoftwareComputer_1.SoftwareComputer], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManySoftwareComputerArgs_1.FindManySoftwareComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SoftwareComputerCrudResolver.prototype, "softwareComputers", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => SoftwareComputer_1.SoftwareComputer, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateSoftwareComputerArgs_1.CreateSoftwareComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SoftwareComputerCrudResolver.prototype, "createSoftwareComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManySoftwareComputerArgs_1.CreateManySoftwareComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SoftwareComputerCrudResolver.prototype, "createManySoftwareComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => SoftwareComputer_1.SoftwareComputer, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteSoftwareComputerArgs_1.DeleteSoftwareComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SoftwareComputerCrudResolver.prototype, "deleteSoftwareComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => SoftwareComputer_1.SoftwareComputer, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateSoftwareComputerArgs_1.UpdateSoftwareComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SoftwareComputerCrudResolver.prototype, "updateSoftwareComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManySoftwareComputerArgs_1.DeleteManySoftwareComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SoftwareComputerCrudResolver.prototype, "deleteManySoftwareComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManySoftwareComputerArgs_1.UpdateManySoftwareComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SoftwareComputerCrudResolver.prototype, "updateManySoftwareComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => SoftwareComputer_1.SoftwareComputer, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertSoftwareComputerArgs_1.UpsertSoftwareComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SoftwareComputerCrudResolver.prototype, "upsertSoftwareComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateSoftwareComputer_1.AggregateSoftwareComputer, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateSoftwareComputerArgs_1.AggregateSoftwareComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SoftwareComputerCrudResolver.prototype, "aggregateSoftwareComputer", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [SoftwareComputerGroupBy_1.SoftwareComputerGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupBySoftwareComputerArgs_1.GroupBySoftwareComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SoftwareComputerCrudResolver.prototype, "groupBySoftwareComputer", null);
SoftwareComputerCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => SoftwareComputer_1.SoftwareComputer)
], SoftwareComputerCrudResolver);
exports.SoftwareComputerCrudResolver = SoftwareComputerCrudResolver;
