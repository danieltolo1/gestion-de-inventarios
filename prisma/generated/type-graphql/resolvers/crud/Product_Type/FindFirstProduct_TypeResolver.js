"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstProduct_TypeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindFirstProduct_TypeArgs_1 = require("./args/FindFirstProduct_TypeArgs");
const Product_Type_1 = require("../../../models/Product_Type");
const helpers_1 = require("../../../helpers");
let FindFirstProduct_TypeResolver = class FindFirstProduct_TypeResolver {
    async findFirstProduct_Type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_Type.findFirst({
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
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstProduct_TypeArgs_1.FindFirstProduct_TypeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindFirstProduct_TypeResolver.prototype, "findFirstProduct_Type", null);
FindFirstProduct_TypeResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Product_Type_1.Product_Type)
], FindFirstProduct_TypeResolver);
exports.FindFirstProduct_TypeResolver = FindFirstProduct_TypeResolver;
