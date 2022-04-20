"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let MaintenanceMaxAggregate = class MaintenanceMaxAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MaintenanceMaxAggregate.prototype, "id_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], MaintenanceMaxAggregate.prototype, "date_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceMaxAggregate.prototype, "jworkerNameFirm", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceMaxAggregate.prototype, "userId", void 0);
MaintenanceMaxAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("MaintenanceMaxAggregate", {
        isAbstract: true
    })
], MaintenanceMaxAggregate);
exports.MaintenanceMaxAggregate = MaintenanceMaxAggregate;
