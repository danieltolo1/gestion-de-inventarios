"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertProductoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpsertProductoArgs_1 = require("./args/UpsertProductoArgs");
const Producto_1 = require("../../../models/Producto");
const helpers_1 = require("../../../helpers");
let UpsertProductoResolver = class UpsertProductoResolver {
    async upsertProducto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).producto.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Producto_1.Producto, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertProductoArgs_1.UpsertProductoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpsertProductoResolver.prototype, "upsertProducto", null);
UpsertProductoResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Producto_1.Producto)
], UpsertProductoResolver);
exports.UpsertProductoResolver = UpsertProductoResolver;
