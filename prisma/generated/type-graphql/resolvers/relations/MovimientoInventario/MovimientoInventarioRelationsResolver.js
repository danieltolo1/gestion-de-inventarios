"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Inventario_1 = require("../../../models/Inventario");
const MovimientoInventario_1 = require("../../../models/MovimientoInventario");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let MovimientoInventarioRelationsResolver = class MovimientoInventarioRelationsResolver {
    async inventario(movimientoInventario, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).movimientoInventario.findUnique({
            where: {
                id: movimientoInventario.id,
            },
        }).inventario({});
    }
    async usuario(movimientoInventario, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).movimientoInventario.findUnique({
            where: {
                id: movimientoInventario.id,
            },
        }).usuario({});
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Inventario_1.Inventario, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [MovimientoInventario_1.MovimientoInventario, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MovimientoInventarioRelationsResolver.prototype, "inventario", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [MovimientoInventario_1.MovimientoInventario, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MovimientoInventarioRelationsResolver.prototype, "usuario", null);
MovimientoInventarioRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => MovimientoInventario_1.MovimientoInventario)
], MovimientoInventarioRelationsResolver);
exports.MovimientoInventarioRelationsResolver = MovimientoInventarioRelationsResolver;
