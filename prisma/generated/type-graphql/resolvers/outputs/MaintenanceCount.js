"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let MaintenanceCount = class MaintenanceCount {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MaintenanceCount.prototype, "product", void 0);
MaintenanceCount = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("MaintenanceCount", {
        isAbstract: true
    })
], MaintenanceCount);
exports.MaintenanceCount = MaintenanceCount;
