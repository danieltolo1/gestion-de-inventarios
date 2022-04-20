"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProduct_TypeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByProduct_TypeArgs_1 = require("./args/GroupByProduct_TypeArgs");
const Product_Type_1 = require("../../../models/Product_Type");
const Product_TypeGroupBy_1 = require("../../outputs/Product_TypeGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByProduct_TypeResolver = class GroupByProduct_TypeResolver {
    async groupByProduct_Type(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_Type.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Product_TypeGroupBy_1.Product_TypeGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByProduct_TypeArgs_1.GroupByProduct_TypeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupByProduct_TypeResolver.prototype, "groupByProduct_Type", null);
GroupByProduct_TypeResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Product_Type_1.Product_Type)
], GroupByProduct_TypeResolver);
exports.GroupByProduct_TypeResolver = GroupByProduct_TypeResolver;
