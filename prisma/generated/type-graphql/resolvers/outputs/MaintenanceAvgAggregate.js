"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let MaintenanceAvgAggregate = class MaintenanceAvgAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MaintenanceAvgAggregate.prototype, "id_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MaintenanceAvgAggregate.prototype, "computerId", void 0);
MaintenanceAvgAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("MaintenanceAvgAggregate", {
        isAbstract: true
    })
], MaintenanceAvgAggregate);
exports.MaintenanceAvgAggregate = MaintenanceAvgAggregate;
