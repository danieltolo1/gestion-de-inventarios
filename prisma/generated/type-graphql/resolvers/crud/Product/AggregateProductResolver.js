"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProductResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateProductArgs_1 = require("./args/AggregateProductArgs");
const Product_1 = require("../../../models/Product");
const AggregateProduct_1 = require("../../outputs/AggregateProduct");
const helpers_1 = require("../../../helpers");
let AggregateProductResolver = class AggregateProductResolver {
    async aggregateProduct(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateProduct_1.AggregateProduct, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateProductArgs_1.AggregateProductArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateProductResolver.prototype, "aggregateProduct", null);
AggregateProductResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], AggregateProductResolver);
exports.AggregateProductResolver = AggregateProductResolver;
