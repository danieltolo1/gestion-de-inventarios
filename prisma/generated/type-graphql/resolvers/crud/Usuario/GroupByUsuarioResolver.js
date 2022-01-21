"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByUsuarioResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByUsuarioArgs_1 = require("./args/GroupByUsuarioArgs");
const Usuario_1 = require("../../../models/Usuario");
const UsuarioGroupBy_1 = require("../../outputs/UsuarioGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByUsuarioResolver = class GroupByUsuarioResolver {
    async groupByUsuario(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
], GroupByUsuarioResolver.prototype, "groupByUsuario", null);
GroupByUsuarioResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Usuario_1.Usuario)
], GroupByUsuarioResolver);
exports.GroupByUsuarioResolver = GroupByUsuarioResolver;
