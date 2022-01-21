"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstMovimientoInventarioResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindFirstMovimientoInventarioArgs_1 = require("./args/FindFirstMovimientoInventarioArgs");
const MovimientoInventario_1 = require("../../../models/MovimientoInventario");
const helpers_1 = require("../../../helpers");
let FindFirstMovimientoInventarioResolver = class FindFirstMovimientoInventarioResolver {
    async findFirstMovimientoInventario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).movimientoInventario.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => MovimientoInventario_1.MovimientoInventario, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstMovimientoInventarioArgs_1.FindFirstMovimientoInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindFirstMovimientoInventarioResolver.prototype, "findFirstMovimientoInventario", null);
FindFirstMovimientoInventarioResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => MovimientoInventario_1.MovimientoInventario)
], FindFirstMovimientoInventarioResolver);
exports.FindFirstMovimientoInventarioResolver = FindFirstMovimientoInventarioResolver;
