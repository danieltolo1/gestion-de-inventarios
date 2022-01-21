"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMovimientoInventarioResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateMovimientoInventarioArgs_1 = require("./args/AggregateMovimientoInventarioArgs");
const MovimientoInventario_1 = require("../../../models/MovimientoInventario");
const AggregateMovimientoInventario_1 = require("../../outputs/AggregateMovimientoInventario");
const helpers_1 = require("../../../helpers");
let AggregateMovimientoInventarioResolver = class AggregateMovimientoInventarioResolver {
    async aggregateMovimientoInventario(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).movimientoInventario.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateMovimientoInventario_1.AggregateMovimientoInventario, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateMovimientoInventarioArgs_1.AggregateMovimientoInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateMovimientoInventarioResolver.prototype, "aggregateMovimientoInventario", null);
AggregateMovimientoInventarioResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => MovimientoInventario_1.MovimientoInventario)
], AggregateMovimientoInventarioResolver);
exports.AggregateMovimientoInventarioResolver = AggregateMovimientoInventarioResolver;
