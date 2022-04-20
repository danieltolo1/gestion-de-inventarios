"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateStateArgs_1 = require("./args/AggregateStateArgs");
const CreateManyStateArgs_1 = require("./args/CreateManyStateArgs");
const CreateStateArgs_1 = require("./args/CreateStateArgs");
const DeleteManyStateArgs_1 = require("./args/DeleteManyStateArgs");
const DeleteStateArgs_1 = require("./args/DeleteStateArgs");
const FindFirstStateArgs_1 = require("./args/FindFirstStateArgs");
const FindManyStateArgs_1 = require("./args/FindManyStateArgs");
const FindUniqueStateArgs_1 = require("./args/FindUniqueStateArgs");
const GroupByStateArgs_1 = require("./args/GroupByStateArgs");
const UpdateManyStateArgs_1 = require("./args/UpdateManyStateArgs");
const UpdateStateArgs_1 = require("./args/UpdateStateArgs");
const UpsertStateArgs_1 = require("./args/UpsertStateArgs");
const helpers_1 = require("../../../helpers");
const State_1 = require("../../../models/State");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateState_1 = require("../../outputs/AggregateState");
const StateGroupBy_1 = require("../../outputs/StateGroupBy");
let StateCrudResolver = class StateCrudResolver {
    async state(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).state.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstState(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).state.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async states(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).state.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createState(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).state.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyState(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).state.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteState(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).state.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateState(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).state.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyState(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).state.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyState(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).state.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertState(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).state.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateState(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).state.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByState(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).state.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => State_1.State, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueStateArgs_1.FindUniqueStateArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], StateCrudResolver.prototype, "state", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => State_1.State, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstStateArgs_1.FindFirstStateArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], StateCrudResolver.prototype, "findFirstState", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [State_1.State], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyStateArgs_1.FindManyStateArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], StateCrudResolver.prototype, "states", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => State_1.State, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateStateArgs_1.CreateStateArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], StateCrudResolver.prototype, "createState", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyStateArgs_1.CreateManyStateArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], StateCrudResolver.prototype, "createManyState", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => State_1.State, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteStateArgs_1.DeleteStateArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], StateCrudResolver.prototype, "deleteState", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => State_1.State, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateStateArgs_1.UpdateStateArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], StateCrudResolver.prototype, "updateState", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyStateArgs_1.DeleteManyStateArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], StateCrudResolver.prototype, "deleteManyState", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyStateArgs_1.UpdateManyStateArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], StateCrudResolver.prototype, "updateManyState", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => State_1.State, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertStateArgs_1.UpsertStateArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], StateCrudResolver.prototype, "upsertState", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateState_1.AggregateState, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateStateArgs_1.AggregateStateArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], StateCrudResolver.prototype, "aggregateState", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [StateGroupBy_1.StateGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByStateArgs_1.GroupByStateArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], StateCrudResolver.prototype, "groupByState", null);
StateCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => State_1.State)
], StateCrudResolver);
exports.StateCrudResolver = StateCrudResolver;
