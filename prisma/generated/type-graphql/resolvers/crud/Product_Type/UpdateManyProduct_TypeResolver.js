"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyProduct_TypeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpdateManyProduct_TypeArgs_1 = require("./args/UpdateManyProduct_TypeArgs");
const Product_Type_1 = require("../../../models/Product_Type");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyProduct_TypeResolver = class UpdateManyProduct_TypeResolver {
    async updateManyProduct_Type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_Type.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpdateManyProduct_TypeResolver.prototype, "updateManyProduct_Type", null);
UpdateManyProduct_TypeResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Product_Type_1.Product_Type)
], UpdateManyProduct_TypeResolver);
exports.UpdateManyProduct_TypeResolver = UpdateManyProduct_TypeResolver;
