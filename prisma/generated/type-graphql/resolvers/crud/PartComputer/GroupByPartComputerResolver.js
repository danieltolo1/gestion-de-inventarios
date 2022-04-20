"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPartComputerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByPartComputerArgs_1 = require("./args/GroupByPartComputerArgs");
const PartComputer_1 = require("../../../models/PartComputer");
const PartComputerGroupBy_1 = require("../../outputs/PartComputerGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByPartComputerResolver = class GroupByPartComputerResolver {
    async groupByPartComputer(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).partComputer.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [PartComputerGroupBy_1.PartComputerGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByPartComputerArgs_1.GroupByPartComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupByPartComputerResolver.prototype, "groupByPartComputer", null);
GroupByPartComputerResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => PartComputer_1.PartComputer)
], GroupByPartComputerResolver);
exports.GroupByPartComputerResolver = GroupByPartComputerResolver;
