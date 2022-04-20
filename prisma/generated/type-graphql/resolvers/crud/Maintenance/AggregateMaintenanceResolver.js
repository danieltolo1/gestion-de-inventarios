"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMaintenanceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateMaintenanceArgs_1 = require("./args/AggregateMaintenanceArgs");
const Maintenance_1 = require("../../../models/Maintenance");
const AggregateMaintenance_1 = require("../../outputs/AggregateMaintenance");
const helpers_1 = require("../../../helpers");
let AggregateMaintenanceResolver = class AggregateMaintenanceResolver {
    async aggregateMaintenance(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).maintenance.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateMaintenance_1.AggregateMaintenance, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateMaintenanceArgs_1.AggregateMaintenanceArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateMaintenanceResolver.prototype, "aggregateMaintenance", null);
AggregateMaintenanceResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Maintenance_1.Maintenance)
], AggregateMaintenanceResolver);
exports.AggregateMaintenanceResolver = AggregateMaintenanceResolver;
