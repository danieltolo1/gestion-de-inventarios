"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstProductoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindFirstProductoArgs_1 = require("./args/FindFirstProductoArgs");
const Producto_1 = require("../../../models/Producto");
const helpers_1 = require("../../../helpers");
let FindFirstProductoResolver = class FindFirstProductoResolver {
    async findFirstProducto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).producto.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Producto_1.Producto, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstProductoArgs_1.FindFirstProductoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindFirstProductoResolver.prototype, "findFirstProducto", null);
FindFirstProductoResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Producto_1.Producto)
], FindFirstProductoResolver);
exports.FindFirstProductoResolver = FindFirstProductoResolver;
