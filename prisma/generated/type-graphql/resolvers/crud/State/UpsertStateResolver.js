"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertStateResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpsertStateArgs_1 = require("./args/UpsertStateArgs");
const State_1 = require("../../../models/State");
const helpers_1 = require("../../../helpers");
let UpsertStateResolver = class UpsertStateResolver {
    async upsertState(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).state.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => State_1.State, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertStateArgs_1.UpsertStateArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpsertStateResolver.prototype, "upsertState", null);
UpsertStateResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => State_1.State)
], UpsertStateResolver);
exports.UpsertStateResolver = UpsertStateResolver;
