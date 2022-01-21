"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertUsuarioResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpsertUsuarioArgs_1 = require("./args/UpsertUsuarioArgs");
const Usuario_1 = require("../../../models/Usuario");
const helpers_1 = require("../../../helpers");
let UpsertUsuarioResolver = class UpsertUsuarioResolver {
    async upsertUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpsertUsuarioResolver.prototype, "upsertUsuario", null);
UpsertUsuarioResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Usuario_1.Usuario)
], UpsertUsuarioResolver);
exports.UpsertUsuarioResolver = UpsertUsuarioResolver;
