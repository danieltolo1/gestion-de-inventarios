"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProductoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByProductoArgs_1 = require("./args/GroupByProductoArgs");
const Producto_1 = require("../../../models/Producto");
const ProductoGroupBy_1 = require("../../outputs/ProductoGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByProductoResolver = class GroupByProductoResolver {
    async groupByProducto(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).producto.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [ProductoGroupBy_1.ProductoGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByProductoArgs_1.GroupByProductoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupByProductoResolver.prototype, "groupByProducto", null);
GroupByProductoResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Producto_1.Producto)
], GroupByProductoResolver);
exports.GroupByProductoResolver = GroupByProductoResolver;
