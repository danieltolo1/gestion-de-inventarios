"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateUsuarioArgs_1 = require("./args/AggregateUsuarioArgs");
const CreateManyUsuarioArgs_1 = require("./args/CreateManyUsuarioArgs");
const CreateUsuarioArgs_1 = require("./args/CreateUsuarioArgs");
const DeleteManyUsuarioArgs_1 = require("./args/DeleteManyUsuarioArgs");
const DeleteUsuarioArgs_1 = require("./args/DeleteUsuarioArgs");
const FindFirstUsuarioArgs_1 = require("./args/FindFirstUsuarioArgs");
const FindManyUsuarioArgs_1 = require("./args/FindManyUsuarioArgs");
const FindUniqueUsuarioArgs_1 = require("./args/FindUniqueUsuarioArgs");
const GroupByUsuarioArgs_1 = require("./args/GroupByUsuarioArgs");
const UpdateManyUsuarioArgs_1 = require("./args/UpdateManyUsuarioArgs");
const UpdateUsuarioArgs_1 = require("./args/UpdateUsuarioArgs");
const UpsertUsuarioArgs_1 = require("./args/UpsertUsuarioArgs");
const helpers_1 = require("../../../helpers");
const Usuario_1 = require("../../../models/Usuario");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUsuario_1 = require("../../outputs/AggregateUsuario");
const UsuarioGroupBy_1 = require("../../outputs/UsuarioGroupBy");
let UsuarioCrudResolver = class UsuarioCrudResolver {
    async usuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async usuarios(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateUsuario(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByUsuario(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Usuario_1.Usuario, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueUsuarioArgs_1.FindUniqueUsuarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioCrudResolver.prototype, "usuario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Usuario_1.Usuario, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstUsuarioArgs_1.FindFirstUsuarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioCrudResolver.prototype, "findFirstUsuario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Usuario_1.Usuario], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyUsuarioArgs_1.FindManyUsuarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioCrudResolver.prototype, "usuarios", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Usuario_1.Usuario, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateUsuarioArgs_1.CreateUsuarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioCrudResolver.prototype, "createUsuario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyUsuarioArgs_1.CreateManyUsuarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioCrudResolver.prototype, "createManyUsuario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Usuario_1.Usuario, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteUsuarioArgs_1.DeleteUsuarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioCrudResolver.prototype, "deleteUsuario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Usuario_1.Usuario, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateUsuarioArgs_1.UpdateUsuarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioCrudResolver.prototype, "updateUsuario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyUsuarioArgs_1.DeleteManyUsuarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioCrudResolver.prototype, "deleteManyUsuario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyUsuarioArgs_1.UpdateManyUsuarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioCrudResolver.prototype, "updateManyUsuario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Usuario_1.Usuario, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertUsuarioArgs_1.UpsertUsuarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioCrudResolver.prototype, "upsertUsuario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateUsuario_1.AggregateUsuario, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateUsuarioArgs_1.AggregateUsuarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioCrudResolver.prototype, "aggregateUsuario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [UsuarioGroupBy_1.UsuarioGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByUsuarioArgs_1.GroupByUsuarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioCrudResolver.prototype, "groupByUsuario", null);
UsuarioCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Usuario_1.Usuario)
], UsuarioCrudResolver);
exports.UsuarioCrudResolver = UsuarioCrudResolver;
