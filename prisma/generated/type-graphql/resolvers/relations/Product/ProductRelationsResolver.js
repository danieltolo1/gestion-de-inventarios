"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputer_1 = require("../../../models/PartComputer");
const Product_1 = require("../../../models/Product");
const Product_Type_1 = require("../../../models/Product_Type");
const State_1 = require("../../../models/State");
const helpers_1 = require("../../../helpers");
let ProductRelationsResolver = class ProductRelationsResolver {
    async product_type(product, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findUnique({
            where: {
                id_product: product.id_product,
            },
        }).product_type({});
    }
    async state(product, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findUnique({
            where: {
                id_product: product.id_product,
            },
        }).state({});
    }
    async partcomputer(product, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findUnique({
            where: {
                id_product: product.id_product,
            },
        }).partcomputer({});
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Product_Type_1.Product_Type, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Product_1.Product, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductRelationsResolver.prototype, "product_type", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => State_1.State, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Product_1.Product, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductRelationsResolver.prototype, "state", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => PartComputer_1.PartComputer, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Product_1.Product, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductRelationsResolver.prototype, "partcomputer", null);
ProductRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], ProductRelationsResolver);
exports.ProductRelationsResolver = ProductRelationsResolver;
