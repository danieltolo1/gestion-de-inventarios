"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventario_1 = require("../../../models/MovimientoInventario");
const Usuario_1 = require("../../../models/Usuario");
const UsuarioMovimientosArgs_1 = require("./args/UsuarioMovimientosArgs");
const helpers_1 = require("../../../helpers");
let UsuarioRelationsResolver = class UsuarioRelationsResolver {
    async movimientos(usuario, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.findUnique({
            where: {
                id: usuario.id,
            },
        }).movimientos(args);
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [MovimientoInventario_1.MovimientoInventario], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Usuario_1.Usuario, Object, UsuarioMovimientosArgs_1.UsuarioMovimientosArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioRelationsResolver.prototype, "movimientos", null);
UsuarioRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Usuario_1.Usuario)
], UsuarioRelationsResolver);
exports.UsuarioRelationsResolver = UsuarioRelationsResolver;
