"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateProductoArgs_1 = require("./args/AggregateProductoArgs");
const CreateManyProductoArgs_1 = require("./args/CreateManyProductoArgs");
const CreateProductoArgs_1 = require("./args/CreateProductoArgs");
const DeleteManyProductoArgs_1 = require("./args/DeleteManyProductoArgs");
const DeleteProductoArgs_1 = require("./args/DeleteProductoArgs");
const FindFirstProductoArgs_1 = require("./args/FindFirstProductoArgs");
const FindManyProductoArgs_1 = require("./args/FindManyProductoArgs");
const FindUniqueProductoArgs_1 = require("./args/FindUniqueProductoArgs");
const GroupByProductoArgs_1 = require("./args/GroupByProductoArgs");
const UpdateManyProductoArgs_1 = require("./args/UpdateManyProductoArgs");
const UpdateProductoArgs_1 = require("./args/UpdateProductoArgs");
const UpsertProductoArgs_1 = require("./args/UpsertProductoArgs");
const helpers_1 = require("../../../helpers");
const Producto_1 = require("../../../models/Producto");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateProducto_1 = require("../../outputs/AggregateProducto");
const ProductoGroupBy_1 = require("../../outputs/ProductoGroupBy");
let ProductoCrudResolver = class ProductoCrudResolver {
    async producto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).producto.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstProducto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).producto.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async productos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).producto.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createProducto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).producto.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyProducto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).producto.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteProducto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).producto.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateProducto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).producto.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyProducto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).producto.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyProducto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).producto.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertProducto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).producto.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateProducto(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).producto.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByProducto(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).producto.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Producto_1.Producto, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueProductoArgs_1.FindUniqueProductoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoCrudResolver.prototype, "producto", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Producto_1.Producto, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstProductoArgs_1.FindFirstProductoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoCrudResolver.prototype, "findFirstProducto", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Producto_1.Producto], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyProductoArgs_1.FindManyProductoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoCrudResolver.prototype, "productos", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Producto_1.Producto, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateProductoArgs_1.CreateProductoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoCrudResolver.prototype, "createProducto", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyProductoArgs_1.CreateManyProductoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoCrudResolver.prototype, "createManyProducto", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Producto_1.Producto, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteProductoArgs_1.DeleteProductoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoCrudResolver.prototype, "deleteProducto", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Producto_1.Producto, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateProductoArgs_1.UpdateProductoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoCrudResolver.prototype, "updateProducto", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyProductoArgs_1.DeleteManyProductoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoCrudResolver.prototype, "deleteManyProducto", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyProductoArgs_1.UpdateManyProductoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoCrudResolver.prototype, "updateManyProducto", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Producto_1.Producto, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertProductoArgs_1.UpsertProductoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoCrudResolver.prototype, "upsertProducto", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateProducto_1.AggregateProducto, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateProductoArgs_1.AggregateProductoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoCrudResolver.prototype, "aggregateProducto", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [ProductoGroupBy_1.ProductoGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByProductoArgs_1.GroupByProductoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoCrudResolver.prototype, "groupByProducto", null);
ProductoCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Producto_1.Producto)
], ProductoCrudResolver);
exports.ProductoCrudResolver = ProductoCrudResolver;
