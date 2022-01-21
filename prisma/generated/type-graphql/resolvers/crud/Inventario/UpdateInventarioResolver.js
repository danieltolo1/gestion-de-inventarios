"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInventarioResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpdateInventarioArgs_1 = require("./args/UpdateInventarioArgs");
const Inventario_1 = require("../../../models/Inventario");
const helpers_1 = require("../../../helpers");
let UpdateInventarioResolver = class UpdateInventarioResolver {
    async updateInventario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventario.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Inventario_1.Inventario, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateInventarioArgs_1.UpdateInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpdateInventarioResolver.prototype, "updateInventario", null);
UpdateInventarioResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Inventario_1.Inventario)
], UpdateInventarioResolver);
exports.UpdateInventarioResolver = UpdateInventarioResolver;
