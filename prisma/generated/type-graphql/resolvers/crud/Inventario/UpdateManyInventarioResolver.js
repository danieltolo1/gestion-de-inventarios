"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyInventarioResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpdateManyInventarioArgs_1 = require("./args/UpdateManyInventarioArgs");
const Inventario_1 = require("../../../models/Inventario");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyInventarioResolver = class UpdateManyInventarioResolver {
    async updateManyInventario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventario.updateMany({
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
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyInventarioArgs_1.UpdateManyInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpdateManyInventarioResolver.prototype, "updateManyInventario", null);
UpdateManyInventarioResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Inventario_1.Inventario)
], UpdateManyInventarioResolver);
exports.UpdateManyInventarioResolver = UpdateManyInventarioResolver;
