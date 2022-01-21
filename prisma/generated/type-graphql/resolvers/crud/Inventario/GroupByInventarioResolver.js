"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByInventarioResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByInventarioArgs_1 = require("./args/GroupByInventarioArgs");
const Inventario_1 = require("../../../models/Inventario");
const InventarioGroupBy_1 = require("../../outputs/InventarioGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByInventarioResolver = class GroupByInventarioResolver {
    async groupByInventario(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventario.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [InventarioGroupBy_1.InventarioGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByInventarioArgs_1.GroupByInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupByInventarioResolver.prototype, "groupByInventario", null);
GroupByInventarioResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Inventario_1.Inventario)
], GroupByInventarioResolver);
exports.GroupByInventarioResolver = GroupByInventarioResolver;
