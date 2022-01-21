"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInventarioResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const CreateInventarioArgs_1 = require("./args/CreateInventarioArgs");
const Inventario_1 = require("../../../models/Inventario");
const helpers_1 = require("../../../helpers");
let CreateInventarioResolver = class CreateInventarioResolver {
    async createInventario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inventario.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Inventario_1.Inventario, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateInventarioArgs_1.CreateInventarioArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CreateInventarioResolver.prototype, "createInventario", null);
CreateInventarioResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Inventario_1.Inventario)
], CreateInventarioResolver);
exports.CreateInventarioResolver = CreateInventarioResolver;