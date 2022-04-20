"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStateResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const DeleteStateArgs_1 = require("./args/DeleteStateArgs");
const State_1 = require("../../../models/State");
const helpers_1 = require("../../../helpers");
let DeleteStateResolver = class DeleteStateResolver {
    async deleteState(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).state.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => State_1.State, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteStateArgs_1.DeleteStateArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DeleteStateResolver.prototype, "deleteState", null);
DeleteStateResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => State_1.State)
], DeleteStateResolver);
exports.DeleteStateResolver = DeleteStateResolver;
