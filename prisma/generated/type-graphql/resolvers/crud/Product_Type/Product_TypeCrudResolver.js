"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateProduct_TypeArgs_1 = require("./args/AggregateProduct_TypeArgs");
const CreateManyProduct_TypeArgs_1 = require("./args/CreateManyProduct_TypeArgs");
const CreateProduct_TypeArgs_1 = require("./args/CreateProduct_TypeArgs");
const DeleteManyProduct_TypeArgs_1 = require("./args/DeleteManyProduct_TypeArgs");
const DeleteProduct_TypeArgs_1 = require("./args/DeleteProduct_TypeArgs");
const FindFirstProduct_TypeArgs_1 = require("./args/FindFirstProduct_TypeArgs");
const FindManyProduct_TypeArgs_1 = require("./args/FindManyProduct_TypeArgs");
const FindUniqueProduct_TypeArgs_1 = require("./args/FindUniqueProduct_TypeArgs");
const GroupByProduct_TypeArgs_1 = require("./args/GroupByProduct_TypeArgs");
const UpdateManyProduct_TypeArgs_1 = require("./args/UpdateManyProduct_TypeArgs");
const UpdateProduct_TypeArgs_1 = require("./args/UpdateProduct_TypeArgs");
const UpsertProduct_TypeArgs_1 = require("./args/UpsertProduct_TypeArgs");
const helpers_1 = require("../../../helpers");
const Product_Type_1 = require("../../../models/Product_Type");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateProduct_Type_1 = require("../../outputs/AggregateProduct_Type");
const Product_TypeGroupBy_1 = require("../../outputs/Product_TypeGroupBy");
let Product_TypeCrudResolver = class Product_TypeCrudResolver {
    async product_Type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_Type.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstProduct_Type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_Type.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async product_Types(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_Type.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createProduct_Type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_Type.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyProduct_Type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_Type.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteProduct_Type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_Type.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateProduct_Type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_Type.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyProduct_Type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_Type.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyProduct_Type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_Type.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertProduct_Type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_Type.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateProduct_Type(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product_Type.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByProduct_Type(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_Type.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
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
], Product_TypeCrudResolver.prototype, "product_Type", null);
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
], Product_TypeCrudResolver.prototype, "findFirstProduct_Type", null);
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
], Product_TypeCrudResolver.prototype, "product_Types", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Product_Type_1.Product_Type, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateProduct_TypeArgs_1.CreateProduct_TypeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], Product_TypeCrudResolver.prototype, "createProduct_Type", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyProduct_TypeArgs_1.CreateManyProduct_TypeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], Product_TypeCrudResolver.prototype, "createManyProduct_Type", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Product_Type_1.Product_Type, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteProduct_TypeArgs_1.DeleteProduct_TypeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], Product_TypeCrudResolver.prototype, "deleteProduct_Type", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Product_Type_1.Product_Type, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateProduct_TypeArgs_1.UpdateProduct_TypeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], Product_TypeCrudResolver.prototype, "updateProduct_Type", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyProduct_TypeArgs_1.DeleteManyProduct_TypeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], Product_TypeCrudResolver.prototype, "deleteManyProduct_Type", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyProduct_TypeArgs_1.UpdateManyProduct_TypeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], Product_TypeCrudResolver.prototype, "updateManyProduct_Type", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Product_Type_1.Product_Type, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertProduct_TypeArgs_1.UpsertProduct_TypeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], Product_TypeCrudResolver.prototype, "upsertProduct_Type", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateProduct_Type_1.AggregateProduct_Type, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateProduct_TypeArgs_1.AggregateProduct_TypeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], Product_TypeCrudResolver.prototype, "aggregateProduct_Type", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Product_TypeGroupBy_1.Product_TypeGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByProduct_TypeArgs_1.GroupByProduct_TypeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], Product_TypeCrudResolver.prototype, "groupByProduct_Type", null);
Product_TypeCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Product_Type_1.Product_Type)
], Product_TypeCrudResolver);
exports.Product_TypeCrudResolver = Product_TypeCrudResolver;
