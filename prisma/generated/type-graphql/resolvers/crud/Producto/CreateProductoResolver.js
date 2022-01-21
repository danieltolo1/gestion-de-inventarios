"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const CreateProductoArgs_1 = require("./args/CreateProductoArgs");
const Producto_1 = require("../../../models/Producto");
const helpers_1 = require("../../../helpers");
let CreateProductoResolver = class CreateProductoResolver {
    async createProducto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).producto.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Producto_1.Producto, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateProductoArgs_1.CreateProductoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CreateProductoResolver.prototype, "createProducto", null);
CreateProductoResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Producto_1.Producto)
], CreateProductoResolver);
exports.CreateProductoResolver = CreateProductoResolver;
