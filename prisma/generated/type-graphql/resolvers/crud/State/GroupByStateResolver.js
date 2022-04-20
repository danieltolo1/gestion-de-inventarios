"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByStateResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByStateArgs_1 = require("./args/GroupByStateArgs");
const State_1 = require("../../../models/State");
const StateGroupBy_1 = require("../../outputs/StateGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByStateResolver = class GroupByStateResolver {
    async groupByState(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).state.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [StateGroupBy_1.StateGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByStateArgs_1.GroupByStateArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupByStateResolver.prototype, "groupByState", null);
GroupByStateResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => State_1.State)
], GroupByStateResolver);
exports.GroupByStateResolver = GroupByStateResolver;
