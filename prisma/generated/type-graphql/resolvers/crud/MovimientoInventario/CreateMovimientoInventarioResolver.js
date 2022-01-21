"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMovimientoInventarioResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const CreateMovimientoInventarioArgs_1 = require("./args/CreateMovimientoInventarioArgs");
const MovimientoInventario_1 = require("../../../models/MovimientoInventario");
const helpers_1 = require("../../../helpers");
let CreateMovimientoInventarioResolver = class CreateMovimientoInventarioResolver {
    async createMovimientoInventario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).movimientoInventario.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => MovimientoInventario_1.MovimientoInventario, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateMovimientoInventarioArgs_1.CreateMovimientoInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CreateMovimientoInventarioResolver.prototype, "createMovimientoInventario", null);
CreateMovimientoInventarioResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => MovimientoInventario_1.MovimientoInventario)
], CreateMovimientoInventarioResolver);
exports.CreateMovimientoInventarioResolver = CreateMovimientoInventarioResolver;
