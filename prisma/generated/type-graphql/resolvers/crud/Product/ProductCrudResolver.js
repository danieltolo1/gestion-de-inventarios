"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateProductArgs_1 = require("./args/AggregateProductArgs");
const CreateManyProductArgs_1 = require("./args/CreateManyProductArgs");
const CreateProductArgs_1 = require("./args/CreateProductArgs");
const DeleteManyProductArgs_1 = require("./args/DeleteManyProductArgs");
const DeleteProductArgs_1 = require("./args/DeleteProductArgs");
const FindFirstProductArgs_1 = require("./args/FindFirstProductArgs");
const FindManyProductArgs_1 = require("./args/FindManyProductArgs");
const FindUniqueProductArgs_1 = require("./args/FindUniqueProductArgs");
const GroupByProductArgs_1 = require("./args/GroupByProductArgs");
const UpdateManyProductArgs_1 = require("./args/UpdateManyProductArgs");
const UpdateProductArgs_1 = require("./args/UpdateProductArgs");
const UpsertProductArgs_1 = require("./args/UpsertProductArgs");
const helpers_1 = require("../../../helpers");
const Product_1 = require("../../../models/Product");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateProduct_1 = require("../../outputs/AggregateProduct");
const ProductGroupBy_1 = require("../../outputs/ProductGroupBy");
let ProductCrudResolver = class ProductCrudResolver {
    async product(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async products(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateProduct(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByProduct(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
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
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueProductArgs_1.FindUniqueProductArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductCrudResolver.prototype, "product", null);
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
], ProductCrudResolver.prototype, "findFirstProduct", null);
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
], ProductCrudResolver.prototype, "products", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Product_1.Product, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateProductArgs_1.CreateProductArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductCrudResolver.prototype, "createProduct", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyProductArgs_1.CreateManyProductArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductCrudResolver.prototype, "createManyProduct", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Product_1.Product, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteProductArgs_1.DeleteProductArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductCrudResolver.prototype, "deleteProduct", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Product_1.Product, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateProductArgs_1.UpdateProductArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductCrudResolver.prototype, "updateProduct", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyProductArgs_1.DeleteManyProductArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductCrudResolver.prototype, "deleteManyProduct", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyProductArgs_1.UpdateManyProductArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductCrudResolver.prototype, "updateManyProduct", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Product_1.Product, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertProductArgs_1.UpsertProductArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductCrudResolver.prototype, "upsertProduct", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateProduct_1.AggregateProduct, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateProductArgs_1.AggregateProductArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductCrudResolver.prototype, "aggregateProduct", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [ProductGroupBy_1.ProductGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByProductArgs_1.GroupByProductArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductCrudResolver.prototype, "groupByProduct", null);
ProductCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], ProductCrudResolver);
exports.ProductCrudResolver = ProductCrudResolver;
