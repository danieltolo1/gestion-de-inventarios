"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyInventarioResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindManyInventarioArgs_1 = require("./args/FindManyInventarioArgs");
const Inventario_1 = require("../../../models/Inventario");
const helpers_1 = require("../../../helpers");
let FindManyInventarioResolver = class FindManyInventarioResolver {
    async inventarios(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventario.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Inventario_1.Inventario], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyInventarioArgs_1.FindManyInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindManyInventarioResolver.prototype, "inventarios", null);
FindManyInventarioResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Inventario_1.Inventario)
], FindManyInventarioResolver);
exports.FindManyInventarioResolver = FindManyInventarioResolver;
