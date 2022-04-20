"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateMaintenanceArgs_1 = require("./args/AggregateMaintenanceArgs");
const CreateMaintenanceArgs_1 = require("./args/CreateMaintenanceArgs");
const CreateManyMaintenanceArgs_1 = require("./args/CreateManyMaintenanceArgs");
const DeleteMaintenanceArgs_1 = require("./args/DeleteMaintenanceArgs");
const DeleteManyMaintenanceArgs_1 = require("./args/DeleteManyMaintenanceArgs");
const FindFirstMaintenanceArgs_1 = require("./args/FindFirstMaintenanceArgs");
const FindManyMaintenanceArgs_1 = require("./args/FindManyMaintenanceArgs");
const FindUniqueMaintenanceArgs_1 = require("./args/FindUniqueMaintenanceArgs");
const GroupByMaintenanceArgs_1 = require("./args/GroupByMaintenanceArgs");
const UpdateMaintenanceArgs_1 = require("./args/UpdateMaintenanceArgs");
const UpdateManyMaintenanceArgs_1 = require("./args/UpdateManyMaintenanceArgs");
const UpsertMaintenanceArgs_1 = require("./args/UpsertMaintenanceArgs");
const helpers_1 = require("../../../helpers");
const Maintenance_1 = require("../../../models/Maintenance");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateMaintenance_1 = require("../../outputs/AggregateMaintenance");
const MaintenanceGroupBy_1 = require("../../outputs/MaintenanceGroupBy");
let MaintenanceCrudResolver = class MaintenanceCrudResolver {
    async maintenance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).maintenance.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstMaintenance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).maintenance.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async maintenances(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).maintenance.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createMaintenance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).maintenance.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyMaintenance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).maintenance.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteMaintenance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).maintenance.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateMaintenance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).maintenance.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyMaintenance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).maintenance.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyMaintenance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).maintenance.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertMaintenance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).maintenance.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateMaintenance(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).maintenance.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByMaintenance(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).maintenance.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Maintenance_1.Maintenance, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueMaintenanceArgs_1.FindUniqueMaintenanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MaintenanceCrudResolver.prototype, "maintenance", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Maintenance_1.Maintenance, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstMaintenanceArgs_1.FindFirstMaintenanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MaintenanceCrudResolver.prototype, "findFirstMaintenance", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Maintenance_1.Maintenance], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyMaintenanceArgs_1.FindManyMaintenanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MaintenanceCrudResolver.prototype, "maintenances", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Maintenance_1.Maintenance, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateMaintenanceArgs_1.CreateMaintenanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MaintenanceCrudResolver.prototype, "createMaintenance", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyMaintenanceArgs_1.CreateManyMaintenanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MaintenanceCrudResolver.prototype, "createManyMaintenance", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Maintenance_1.Maintenance, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteMaintenanceArgs_1.DeleteMaintenanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MaintenanceCrudResolver.prototype, "deleteMaintenance", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Maintenance_1.Maintenance, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateMaintenanceArgs_1.UpdateMaintenanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MaintenanceCrudResolver.prototype, "updateMaintenance", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyMaintenanceArgs_1.DeleteManyMaintenanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MaintenanceCrudResolver.prototype, "deleteManyMaintenance", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyMaintenanceArgs_1.UpdateManyMaintenanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MaintenanceCrudResolver.prototype, "updateManyMaintenance", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Maintenance_1.Maintenance, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertMaintenanceArgs_1.UpsertMaintenanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MaintenanceCrudResolver.prototype, "upsertMaintenance", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateMaintenance_1.AggregateMaintenance, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateMaintenanceArgs_1.AggregateMaintenanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MaintenanceCrudResolver.prototype, "aggregateMaintenance", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [MaintenanceGroupBy_1.MaintenanceGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByMaintenanceArgs_1.GroupByMaintenanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MaintenanceCrudResolver.prototype, "groupByMaintenance", null);
MaintenanceCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Maintenance_1.Maintenance)
], MaintenanceCrudResolver);
exports.MaintenanceCrudResolver = MaintenanceCrudResolver;
