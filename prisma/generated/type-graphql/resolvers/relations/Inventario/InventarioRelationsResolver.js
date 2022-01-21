"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Inventario_1 = require("../../../models/Inventario");
const MovimientoInventario_1 = require("../../../models/MovimientoInventario");
const Producto_1 = require("../../../models/Producto");
const InventarioMovimientoInventarioArgs_1 = require("./args/InventarioMovimientoInventarioArgs");
const helpers_1 = require("../../../helpers");
let InventarioRelationsResolver = class InventarioRelationsResolver {
    async producto(inventario, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).inventario.findUnique({
            where: {
                id: inventario.id,
            },
        }).producto({});
    }
    async movimientoInventario(inventario, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).inventario.findUnique({
            where: {
                id: inventario.id,
            },
        }).movimientoInventario(args);
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Producto_1.Producto, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Inventario_1.Inventario, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InventarioRelationsResolver.prototype, "producto", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [MovimientoInventario_1.MovimientoInventario], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Inventario_1.Inventario, Object, InventarioMovimientoInventarioArgs_1.InventarioMovimientoInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], InventarioRelationsResolver.prototype, "movimientoInventario", null);
InventarioRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Inventario_1.Inventario)
], InventarioRelationsResolver);
exports.InventarioRelationsResolver = InventarioRelationsResolver;
