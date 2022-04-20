"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByLocationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByLocationArgs_1 = require("./args/GroupByLocationArgs");
const Location_1 = require("../../../models/Location");
const LocationGroupBy_1 = require("../../outputs/LocationGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByLocationResolver = class GroupByLocationResolver {
    async groupByLocation(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).location.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [LocationGroupBy_1.LocationGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByLocationArgs_1.GroupByLocationArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupByLocationResolver.prototype, "groupByLocation", null);
GroupByLocationResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Location_1.Location)
], GroupByLocationResolver);
exports.GroupByLocationResolver = GroupByLocationResolver;
