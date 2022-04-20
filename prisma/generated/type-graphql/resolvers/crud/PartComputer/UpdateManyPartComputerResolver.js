"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPartComputerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpdateManyPartComputerArgs_1 = require("./args/UpdateManyPartComputerArgs");
const PartComputer_1 = require("../../../models/PartComputer");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyPartComputerResolver = class UpdateManyPartComputerResolver {
    async updateManyPartComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).partComputer.updateMany({
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
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyPartComputerArgs_1.UpdateManyPartComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpdateManyPartComputerResolver.prototype, "updateManyPartComputer", null);
UpdateManyPartComputerResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => PartComputer_1.PartComputer)
], UpdateManyPartComputerResolver);
exports.UpdateManyPartComputerResolver = UpdateManyPartComputerResolver;
