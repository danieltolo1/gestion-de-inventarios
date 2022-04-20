"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMaintenance = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceAvgAggregate_1 = require("../outputs/MaintenanceAvgAggregate");
const MaintenanceCountAggregate_1 = require("../outputs/MaintenanceCountAggregate");
const MaintenanceMaxAggregate_1 = require("../outputs/MaintenanceMaxAggregate");
const MaintenanceMinAggregate_1 = require("../outputs/MaintenanceMinAggregate");
const MaintenanceSumAggregate_1 = require("../outputs/MaintenanceSumAggregate");
let AggregateMaintenance = class AggregateMaintenance {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCountAggregate_1.MaintenanceCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCountAggregate_1.MaintenanceCountAggregate)
], AggregateMaintenance.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceAvgAggregate_1.MaintenanceAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceAvgAggregate_1.MaintenanceAvgAggregate)
], AggregateMaintenance.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceSumAggregate_1.MaintenanceSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceSumAggregate_1.MaintenanceSumAggregate)
], AggregateMaintenance.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceMinAggregate_1.MaintenanceMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceMinAggregate_1.MaintenanceMinAggregate)
], AggregateMaintenance.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceMaxAggregate_1.MaintenanceMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceMaxAggregate_1.MaintenanceMaxAggregate)
], AggregateMaintenance.prototype, "_max", void 0);
AggregateMaintenance = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateMaintenance", {
        isAbstract: true
    })
], AggregateMaintenance);
exports.AggregateMaintenance = AggregateMaintenance;
