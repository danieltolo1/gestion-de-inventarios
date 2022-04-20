"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyProduct_TypeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const DeleteManyProduct_TypeArgs_1 = require("./args/DeleteManyProduct_TypeArgs");
const Product_Type_1 = require("../../../models/Product_Type");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyProduct_TypeResolver = class DeleteManyProduct_TypeResolver {
    async deleteManyProduct_Type(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_Type.deleteMany({
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
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyProduct_TypeArgs_1.DeleteManyProduct_TypeArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DeleteManyProduct_TypeResolver.prototype, "deleteManyProduct_Type", null);
DeleteManyProduct_TypeResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Product_Type_1.Product_Type)
], DeleteManyProduct_TypeResolver);
exports.DeleteManyProduct_TypeResolver = DeleteManyProduct_TypeResolver;
