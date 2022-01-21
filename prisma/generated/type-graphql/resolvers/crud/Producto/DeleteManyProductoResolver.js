"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyProductoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const DeleteManyProductoArgs_1 = require("./args/DeleteManyProductoArgs");
const Producto_1 = require("../../../models/Producto");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyProductoResolver = class DeleteManyProductoResolver {
    async deleteManyProducto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).producto.deleteMany({
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
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyProductoArgs_1.DeleteManyProductoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DeleteManyProductoResolver.prototype, "deleteManyProducto", null);
DeleteManyProductoResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Producto_1.Producto)
], DeleteManyProductoResolver);
exports.DeleteManyProductoResolver = DeleteManyProductoResolver;
