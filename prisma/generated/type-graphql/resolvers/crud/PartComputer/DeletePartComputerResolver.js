"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePartComputerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const DeletePartComputerArgs_1 = require("./args/DeletePartComputerArgs");
const PartComputer_1 = require("../../../models/PartComputer");
const helpers_1 = require("../../../helpers");
let DeletePartComputerResolver = class DeletePartComputerResolver {
    async deletePartComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).partComputer.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => PartComputer_1.PartComputer, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeletePartComputerArgs_1.DeletePartComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DeletePartComputerResolver.prototype, "deletePartComputer", null);
DeletePartComputerResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => PartComputer_1.PartComputer)
], DeletePartComputerResolver);
exports.DeletePartComputerResolver = DeletePartComputerResolver;
