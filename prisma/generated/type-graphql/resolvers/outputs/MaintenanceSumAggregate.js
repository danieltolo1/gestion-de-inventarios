"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let MaintenanceSumAggregate = class MaintenanceSumAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MaintenanceSumAggregate.prototype, "id_maintenance", void 0);
MaintenanceSumAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("MaintenanceSumAggregate", {
        isAbstract: true
    })
], MaintenanceSumAggregate);
exports.MaintenanceSumAggregate = MaintenanceSumAggregate;
