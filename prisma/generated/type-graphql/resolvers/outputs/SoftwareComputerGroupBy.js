"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SoftwareComputerAvgAggregate_1 = require("../outputs/SoftwareComputerAvgAggregate");
const SoftwareComputerCountAggregate_1 = require("../outputs/SoftwareComputerCountAggregate");
const SoftwareComputerMaxAggregate_1 = require("../outputs/SoftwareComputerMaxAggregate");
const SoftwareComputerMinAggregate_1 = require("../outputs/SoftwareComputerMinAggregate");
const SoftwareComputerSumAggregate_1 = require("../outputs/SoftwareComputerSumAggregate");
const Enum_Architecture_1 = require("../../enums/Enum_Architecture");
const Enum_Operatigsystem_1 = require("../../enums/Enum_Operatigsystem");
let SoftwareComputerGroupBy = class SoftwareComputerGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SoftwareComputerGroupBy.prototype, "id_softwarecomputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_Operatigsystem_1.Enum_Operatigsystem, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerGroupBy.prototype, "operatingsystem", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerGroupBy.prototype, "license_so", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerGroupBy.prototype, "user_anydesk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerGroupBy.prototype, "pass_anydesk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerGroupBy.prototype, "ip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerGroupBy.prototype, "user_domain", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerGroupBy.prototype, "pass_domain", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerGroupBy.prototype, "user_admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerGroupBy.prototype, "pass_admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerGroupBy.prototype, "user_local", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerGroupBy.prototype, "pass_local", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_Architecture_1.Enum_Architecture, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerGroupBy.prototype, "architecture", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerCountAggregate_1.SoftwareComputerCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerCountAggregate_1.SoftwareComputerCountAggregate)
], SoftwareComputerGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerAvgAggregate_1.SoftwareComputerAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerAvgAggregate_1.SoftwareComputerAvgAggregate)
], SoftwareComputerGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerSumAggregate_1.SoftwareComputerSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerSumAggregate_1.SoftwareComputerSumAggregate)
], SoftwareComputerGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerMinAggregate_1.SoftwareComputerMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerMinAggregate_1.SoftwareComputerMinAggregate)
], SoftwareComputerGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerMaxAggregate_1.SoftwareComputerMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerMaxAggregate_1.SoftwareComputerMaxAggregate)
], SoftwareComputerGroupBy.prototype, "_max", void 0);
SoftwareComputerGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("SoftwareComputerGroupBy", {
        isAbstract: true
    })
], SoftwareComputerGroupBy);
exports.SoftwareComputerGroupBy = SoftwareComputerGroupBy;
