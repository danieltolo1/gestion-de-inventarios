"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertInventarioResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpsertInventarioArgs_1 = require("./args/UpsertInventarioArgs");
const Inventario_1 = require("../../../models/Inventario");
const helpers_1 = require("../../../helpers");
let UpsertInventarioResolver = class UpsertInventarioResolver {
    async upsertInventario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventario.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpsertInventarioResolver.prototype, "upsertInventario", null);
UpsertInventarioResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Inventario_1.Inventario)
], UpsertInventarioResolver);
exports.UpsertInventarioResolver = UpsertInventarioResolver;
