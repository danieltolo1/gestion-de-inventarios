"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyProductResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindManyProductArgs_1 = require("./args/FindManyProductArgs");
const Product_1 = require("../../../models/Product");
const helpers_1 = require("../../../helpers");
let FindManyProductResolver = class FindManyProductResolver {
    async products(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Product_1.Product], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyProductArgs_1.FindManyProductArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindManyProductResolver.prototype, "products", null);
FindManyProductResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], FindManyProductResolver);
exports.FindManyProductResolver = FindManyProductResolver;
