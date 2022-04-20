"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const CreateProductArgs_1 = require("./args/CreateProductArgs");
const Product_1 = require("../../../models/Product");
const helpers_1 = require("../../../helpers");
let CreateProductResolver = class CreateProductResolver {
    async createProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], CreateProductResolver.prototype, "createProduct", null);
CreateProductResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], CreateProductResolver);
exports.CreateProductResolver = CreateProductResolver;
