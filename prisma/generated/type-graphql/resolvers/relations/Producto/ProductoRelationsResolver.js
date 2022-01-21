"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Inventario_1 = require("../../../models/Inventario");
const Producto_1 = require("../../../models/Producto");
const helpers_1 = require("../../../helpers");
let ProductoRelationsResolver = class ProductoRelationsResolver {
    async inventario(producto, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).producto.findUnique({
            where: {
                id: producto.id,
            },
        }).inventario({});
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Inventario_1.Inventario, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Producto_1.Producto, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoRelationsResolver.prototype, "inventario", null);
ProductoRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Producto_1.Producto)
], ProductoRelationsResolver);
exports.ProductoRelationsResolver = ProductoRelationsResolver;
