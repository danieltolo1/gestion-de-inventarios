"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceAvgAggregate_1 = require("../outputs/MaintenanceAvgAggregate");
const MaintenanceCountAggregate_1 = require("../outputs/MaintenanceCountAggregate");
const MaintenanceMaxAggregate_1 = require("../outputs/MaintenanceMaxAggregate");
const MaintenanceMinAggregate_1 = require("../outputs/MaintenanceMinAggregate");
const MaintenanceSumAggregate_1 = require("../outputs/MaintenanceSumAggregate");
let MaintenanceGroupBy = class MaintenanceGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MaintenanceGroupBy.prototype, "id_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], MaintenanceGroupBy.prototype, "date_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceGroupBy.prototype, "jworkerNameFirm", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceGroupBy.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCountAggregate_1.MaintenanceCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCountAggregate_1.MaintenanceCountAggregate)
], MaintenanceGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceAvgAggregate_1.MaintenanceAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceAvgAggregate_1.MaintenanceAvgAggregate)
], MaintenanceGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceSumAggregate_1.MaintenanceSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceSumAggregate_1.MaintenanceSumAggregate)
], MaintenanceGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceMinAggregate_1.MaintenanceMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceMinAggregate_1.MaintenanceMinAggregate)
], MaintenanceGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceMaxAggregate_1.MaintenanceMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceMaxAggregate_1.MaintenanceMaxAggregate)
], MaintenanceGroupBy.prototype, "_max", void 0);
MaintenanceGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("MaintenanceGroupBy", {
        isAbstract: true
    })
], MaintenanceGroupBy);
exports.MaintenanceGroupBy = MaintenanceGroupBy;
