"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMaintenanceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByMaintenanceArgs_1 = require("./args/GroupByMaintenanceArgs");
const Maintenance_1 = require("../../../models/Maintenance");
const MaintenanceGroupBy_1 = require("../../outputs/MaintenanceGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByMaintenanceResolver = class GroupByMaintenanceResolver {
    async groupByMaintenance(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).maintenance.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [MaintenanceGroupBy_1.MaintenanceGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByMaintenanceArgs_1.GroupByMaintenanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupByMaintenanceResolver.prototype, "groupByMaintenance", null);
GroupByMaintenanceResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Maintenance_1.Maintenance)
], GroupByMaintenanceResolver);
exports.GroupByMaintenanceResolver = GroupByMaintenanceResolver;
