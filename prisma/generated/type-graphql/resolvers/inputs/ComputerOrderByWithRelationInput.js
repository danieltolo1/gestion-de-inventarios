"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerOrderByRelationAggregateInput_1 = require("../inputs/PartComputerOrderByRelationAggregateInput");
const SoftwareComputerOrderByWithRelationInput_1 = require("../inputs/SoftwareComputerOrderByWithRelationInput");
const StateOrderByWithRelationInput_1 = require("../inputs/StateOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ComputerOrderByWithRelationInput = class ComputerOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithRelationInput.prototype, "id_computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithRelationInput.prototype, "buy_date", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithRelationInput.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithRelationInput.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithRelationInput.prototype, "serial_number", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithRelationInput.prototype, "memory", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithRelationInput.prototype, "hard_disk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithRelationInput.prototype, "processor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithRelationInput.prototype, "optical_unit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithRelationInput.prototype, "model", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateOrderByWithRelationInput_1.StateOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateOrderByWithRelationInput_1.StateOrderByWithRelationInput)
], ComputerOrderByWithRelationInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithRelationInput.prototype, "stateId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerOrderByWithRelationInput_1.SoftwareComputerOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerOrderByWithRelationInput_1.SoftwareComputerOrderByWithRelationInput)
], ComputerOrderByWithRelationInput.prototype, "softwarecomputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithRelationInput.prototype, "softwarecomputerId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerOrderByRelationAggregateInput_1.PartComputerOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerOrderByRelationAggregateInput_1.PartComputerOrderByRelationAggregateInput)
], ComputerOrderByWithRelationInput.prototype, "partComputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithRelationInput.prototype, "observation", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerOrderByWithRelationInput.prototype, "historial", void 0);
ComputerOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerOrderByWithRelationInput", {
        isAbstract: true
    })
], ComputerOrderByWithRelationInput);
exports.ComputerOrderByWithRelationInput = ComputerOrderByWithRelationInput;
