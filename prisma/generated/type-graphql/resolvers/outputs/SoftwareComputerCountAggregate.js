"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let SoftwareComputerCountAggregate = class SoftwareComputerCountAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SoftwareComputerCountAggregate.prototype, "id_softwarecomputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SoftwareComputerCountAggregate.prototype, "operatingsystem", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SoftwareComputerCountAggregate.prototype, "license_soA", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SoftwareComputerCountAggregate.prototype, "architecture", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SoftwareComputerCountAggregate.prototype, "_all", void 0);
SoftwareComputerCountAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("SoftwareComputerCountAggregate", {
        isAbstract: true
    })
], SoftwareComputerCountAggregate);
exports.SoftwareComputerCountAggregate = SoftwareComputerCountAggregate;
