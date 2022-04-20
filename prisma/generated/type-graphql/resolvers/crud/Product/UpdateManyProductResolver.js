"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyProductResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpdateManyProductArgs_1 = require("./args/UpdateManyProductArgs");
const Product_1 = require("../../../models/Product");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyProductResolver = class UpdateManyProductResolver {
    async updateManyProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product.updateMany({
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
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyProductArgs_1.UpdateManyProductArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpdateManyProductResolver.prototype, "updateManyProduct", null);
UpdateManyProductResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], UpdateManyProductResolver);
exports.UpdateManyProductResolver = UpdateManyProductResolver;
