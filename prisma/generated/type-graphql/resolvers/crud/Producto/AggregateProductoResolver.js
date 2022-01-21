"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProductoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateProductoArgs_1 = require("./args/AggregateProductoArgs");
const Producto_1 = require("../../../models/Producto");
const AggregateProducto_1 = require("../../outputs/AggregateProducto");
const helpers_1 = require("../../../helpers");
let AggregateProductoResolver = class AggregateProductoResolver {
    async aggregateProducto(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).producto.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateProducto_1.AggregateProducto, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateProductoArgs_1.AggregateProductoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateProductoResolver.prototype, "aggregateProducto", null);
AggregateProductoResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Producto_1.Producto)
], AggregateProductoResolver);
exports.AggregateProductoResolver = AggregateProductoResolver;
