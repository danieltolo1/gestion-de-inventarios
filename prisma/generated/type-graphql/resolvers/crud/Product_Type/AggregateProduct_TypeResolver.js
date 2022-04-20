"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProduct_TypeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateProduct_TypeArgs_1 = require("./args/AggregateProduct_TypeArgs");
const Product_Type_1 = require("../../../models/Product_Type");
const AggregateProduct_Type_1 = require("../../outputs/AggregateProduct_Type");
const helpers_1 = require("../../../helpers");
let AggregateProduct_TypeResolver = class AggregateProduct_TypeResolver {
    async aggregateProduct_Type(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product_Type.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateProduct_Type_1.AggregateProduct_Type, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateProduct_TypeArgs_1.AggregateProduct_TypeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateProduct_TypeResolver.prototype, "aggregateProduct_Type", null);
AggregateProduct_TypeResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Product_Type_1.Product_Type)
], AggregateProduct_TypeResolver);
exports.AggregateProduct_TypeResolver = AggregateProduct_TypeResolver;
