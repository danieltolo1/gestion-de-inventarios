"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateStateResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateStateArgs_1 = require("./args/AggregateStateArgs");
const State_1 = require("../../../models/State");
const AggregateState_1 = require("../../outputs/AggregateState");
const helpers_1 = require("../../../helpers");
let AggregateStateResolver = class AggregateStateResolver {
    async aggregateState(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).state.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateState_1.AggregateState, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateStateArgs_1.AggregateStateArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateStateResolver.prototype, "aggregateState", null);
AggregateStateResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => State_1.State)
], AggregateStateResolver);
exports.AggregateStateResolver = AggregateStateResolver;
