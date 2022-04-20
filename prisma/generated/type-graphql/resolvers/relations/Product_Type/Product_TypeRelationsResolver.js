"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Product_1 = require("../../../models/Product");
const Product_Type_1 = require("../../../models/Product_Type");
const Product_TypeProductArgs_1 = require("./args/Product_TypeProductArgs");
const helpers_1 = require("../../../helpers");
let Product_TypeRelationsResolver = class Product_TypeRelationsResolver {
    async product(product_Type, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product_Type.findUnique({
            where: {
                id_product_type: product_Type.id_product_type,
            },
        }).product(args);
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Product_1.Product], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Product_Type_1.Product_Type, Object, Product_TypeProductArgs_1.Product_TypeProductArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], Product_TypeRelationsResolver.prototype, "product", null);
Product_TypeRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Product_Type_1.Product_Type)
], Product_TypeRelationsResolver);
exports.Product_TypeRelationsResolver = Product_TypeRelationsResolver;
