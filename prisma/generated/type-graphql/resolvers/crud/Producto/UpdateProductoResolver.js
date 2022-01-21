"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpdateProductoArgs_1 = require("./args/UpdateProductoArgs");
const Producto_1 = require("../../../models/Producto");
const helpers_1 = require("../../../helpers");
let UpdateProductoResolver = class UpdateProductoResolver {
    async updateProducto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).producto.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Producto_1.Producto, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateProductoArgs_1.UpdateProductoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpdateProductoResolver.prototype, "updateProducto", null);
UpdateProductoResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Producto_1.Producto)
], UpdateProductoResolver);
exports.UpdateProductoResolver = UpdateProductoResolver;
