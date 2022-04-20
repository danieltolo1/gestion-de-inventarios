"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstProductResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindFirstProductArgs_1 = require("./args/FindFirstProductArgs");
const Product_1 = require("../../../models/Product");
const helpers_1 = require("../../../helpers");
let FindFirstProductResolver = class FindFirstProductResolver {
    async findFirstProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Product_1.Product, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstProductArgs_1.FindFirstProductArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindFirstProductResolver.prototype, "findFirstProduct", null);
FindFirstProductResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], FindFirstProductResolver);
exports.FindFirstProductResolver = FindFirstProductResolver;
