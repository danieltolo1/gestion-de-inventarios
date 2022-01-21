"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateInventarioResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateInventarioArgs_1 = require("./args/AggregateInventarioArgs");
const Inventario_1 = require("../../../models/Inventario");
const AggregateInventario_1 = require("../../outputs/AggregateInventario");
const helpers_1 = require("../../../helpers");
let AggregateInventarioResolver = class AggregateInventarioResolver {
    async aggregateInventario(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).inventario.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateInventario_1.AggregateInventario, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateInventarioArgs_1.AggregateInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateInventarioResolver.prototype, "aggregateInventario", null);
AggregateInventarioResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Inventario_1.Inventario)
], AggregateInventarioResolver);
exports.AggregateInventarioResolver = AggregateInventarioResolver;
