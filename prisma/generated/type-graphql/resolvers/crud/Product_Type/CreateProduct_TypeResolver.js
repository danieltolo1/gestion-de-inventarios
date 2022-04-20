"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProduct_TypeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const CreateProduct_TypeArgs_1 = require("./args/CreateProduct_TypeArgs");
const Product_Type_1 = require("../../../models/Product_Type");
const helpers_1 = require("../../../helpers");
let CreateProduct_TypeResolver = class CreateProduct_TypeResolver {
    async createProduct_Type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_Type.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], CreateProduct_TypeResolver.prototype, "createProduct_Type", null);
CreateProduct_TypeResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Product_Type_1.Product_Type)
], CreateProduct_TypeResolver);
exports.CreateProduct_TypeResolver = CreateProduct_TypeResolver;
