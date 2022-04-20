"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateProgramArgs_1 = require("./args/AggregateProgramArgs");
const CreateManyProgramArgs_1 = require("./args/CreateManyProgramArgs");
const CreateProgramArgs_1 = require("./args/CreateProgramArgs");
const DeleteManyProgramArgs_1 = require("./args/DeleteManyProgramArgs");
const DeleteProgramArgs_1 = require("./args/DeleteProgramArgs");
const FindFirstProgramArgs_1 = require("./args/FindFirstProgramArgs");
const FindManyProgramArgs_1 = require("./args/FindManyProgramArgs");
const FindUniqueProgramArgs_1 = require("./args/FindUniqueProgramArgs");
const GroupByProgramArgs_1 = require("./args/GroupByProgramArgs");
const UpdateManyProgramArgs_1 = require("./args/UpdateManyProgramArgs");
const UpdateProgramArgs_1 = require("./args/UpdateProgramArgs");
const UpsertProgramArgs_1 = require("./args/UpsertProgramArgs");
const helpers_1 = require("../../../helpers");
const Program_1 = require("../../../models/Program");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateProgram_1 = require("../../outputs/AggregateProgram");
const ProgramGroupBy_1 = require("../../outputs/ProgramGroupBy");
let ProgramCrudResolver = class ProgramCrudResolver {
    async program(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).program.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstProgram(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).program.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async programs(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).program.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createProgram(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).program.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyProgram(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).program.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteProgram(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).program.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateProgram(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).program.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyProgram(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).program.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyProgram(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).program.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertProgram(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).program.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateProgram(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).program.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByProgram(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).program.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Program_1.Program, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueProgramArgs_1.FindUniqueProgramArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProgramCrudResolver.prototype, "program", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Program_1.Program, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstProgramArgs_1.FindFirstProgramArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProgramCrudResolver.prototype, "findFirstProgram", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Program_1.Program], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyProgramArgs_1.FindManyProgramArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProgramCrudResolver.prototype, "programs", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Program_1.Program, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateProgramArgs_1.CreateProgramArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProgramCrudResolver.prototype, "createProgram", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyProgramArgs_1.CreateManyProgramArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProgramCrudResolver.prototype, "createManyProgram", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Program_1.Program, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteProgramArgs_1.DeleteProgramArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProgramCrudResolver.prototype, "deleteProgram", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Program_1.Program, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateProgramArgs_1.UpdateProgramArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProgramCrudResolver.prototype, "updateProgram", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyProgramArgs_1.DeleteManyProgramArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProgramCrudResolver.prototype, "deleteManyProgram", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyProgramArgs_1.UpdateManyProgramArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProgramCrudResolver.prototype, "updateManyProgram", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Program_1.Program, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertProgramArgs_1.UpsertProgramArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProgramCrudResolver.prototype, "upsertProgram", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateProgram_1.AggregateProgram, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateProgramArgs_1.AggregateProgramArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProgramCrudResolver.prototype, "aggregateProgram", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [ProgramGroupBy_1.ProgramGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByProgramArgs_1.GroupByProgramArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProgramCrudResolver.prototype, "groupByProgram", null);
ProgramCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Program_1.Program)
], ProgramCrudResolver);
exports.ProgramCrudResolver = ProgramCrudResolver;
