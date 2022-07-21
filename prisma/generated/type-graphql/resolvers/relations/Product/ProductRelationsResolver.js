"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Location_1 = require("../../../models/Location");
const Maintenance_1 = require("../../../models/Maintenance");
const Product_1 = require("../../../models/Product");
const Product_Type_1 = require("../../../models/Product_Type");
const State_1 = require("../../../models/State");
const ProductMaintenanceArgs_1 = require("./args/ProductMaintenanceArgs");
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
    async location(product, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findUnique({
            where: {
                id_product: product.id_product,
            },
        }).location({});
    }
    async maintenance(product, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findUnique({
            where: {
                id_product: product.id_product,
            },
        }).maintenance(args);
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
    TypeGraphQL.FieldResolver(_type => Location_1.Location, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Product_1.Product, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductRelationsResolver.prototype, "location", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Maintenance_1.Maintenance], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Product_1.Product, Object, ProductMaintenanceArgs_1.ProductMaintenanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductRelationsResolver.prototype, "maintenance", null);
ProductRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], ProductRelationsResolver);
exports.ProductRelationsResolver = ProductRelationsResolver;
