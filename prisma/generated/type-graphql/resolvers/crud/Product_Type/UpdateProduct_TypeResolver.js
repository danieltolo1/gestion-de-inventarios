"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProduct_TypeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpdateProduct_TypeArgs_1 = require("./args/UpdateProduct_TypeArgs");
const Product_Type_1 = require("../../../models/Product_Type");
const helpers_1 = require("../../../helpers");
let UpdateProduct_TypeResolver = class UpdateProduct_TypeResolver {
    async updateProduct_Type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_Type.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpdateProduct_TypeResolver.prototype, "updateProduct_Type", null);
UpdateProduct_TypeResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Product_Type_1.Product_Type)
], UpdateProduct_TypeResolver);
exports.UpdateProduct_TypeResolver = UpdateProduct_TypeResolver;
