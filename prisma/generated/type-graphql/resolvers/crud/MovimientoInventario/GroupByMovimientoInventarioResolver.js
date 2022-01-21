"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMovimientoInventarioResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByMovimientoInventarioArgs_1 = require("./args/GroupByMovimientoInventarioArgs");
const MovimientoInventario_1 = require("../../../models/MovimientoInventario");
const MovimientoInventarioGroupBy_1 = require("../../outputs/MovimientoInventarioGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByMovimientoInventarioResolver = class GroupByMovimientoInventarioResolver {
    async groupByMovimientoInventario(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).movimientoInventario.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [MovimientoInventarioGroupBy_1.MovimientoInventarioGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByMovimientoInventarioArgs_1.GroupByMovimientoInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupByMovimientoInventarioResolver.prototype, "groupByMovimientoInventario", null);
GroupByMovimientoInventarioResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => MovimientoInventario_1.MovimientoInventario)
], GroupByMovimientoInventarioResolver);
exports.GroupByMovimientoInventarioResolver = GroupByMovimientoInventarioResolver;
