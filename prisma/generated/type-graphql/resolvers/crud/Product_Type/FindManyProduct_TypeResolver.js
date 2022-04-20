"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyProduct_TypeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindManyProduct_TypeArgs_1 = require("./args/FindManyProduct_TypeArgs");
const Product_Type_1 = require("../../../models/Product_Type");
const helpers_1 = require("../../../helpers");
let FindManyProduct_TypeResolver = class FindManyProduct_TypeResolver {
    async product_Types(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_Type.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Product_Type_1.Product_Type], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyProduct_TypeArgs_1.FindManyProduct_TypeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindManyProduct_TypeResolver.prototype, "product_Types", null);
FindManyProduct_TypeResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Product_Type_1.Product_Type)
], FindManyProduct_TypeResolver);
exports.FindManyProduct_TypeResolver = FindManyProduct_TypeResolver;
