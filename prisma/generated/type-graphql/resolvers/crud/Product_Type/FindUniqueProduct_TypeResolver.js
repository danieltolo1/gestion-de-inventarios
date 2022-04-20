"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProduct_TypeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindUniqueProduct_TypeArgs_1 = require("./args/FindUniqueProduct_TypeArgs");
const Product_Type_1 = require("../../../models/Product_Type");
const helpers_1 = require("../../../helpers");
let FindUniqueProduct_TypeResolver = class FindUniqueProduct_TypeResolver {
    async product_Type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_Type.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Product_Type_1.Product_Type, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueProduct_TypeArgs_1.FindUniqueProduct_TypeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindUniqueProduct_TypeResolver.prototype, "product_Type", null);
FindUniqueProduct_TypeResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Product_Type_1.Product_Type)
], FindUniqueProduct_TypeResolver);
exports.FindUniqueProduct_TypeResolver = FindUniqueProduct_TypeResolver;
