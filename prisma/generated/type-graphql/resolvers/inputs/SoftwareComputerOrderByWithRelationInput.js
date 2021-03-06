"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerOrderByRelationAggregateInput_1 = require("../inputs/ComputerOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SoftwareComputerOrderByWithRelationInput = class SoftwareComputerOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerOrderByWithRelationInput.prototype, "id_softwarecomputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerOrderByRelationAggregateInput_1.ComputerOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerOrderByRelationAggregateInput_1.ComputerOrderByRelationAggregateInput)
], SoftwareComputerOrderByWithRelationInput.prototype, "computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerOrderByWithRelationInput.prototype, "operatingsystem", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerOrderByWithRelationInput.prototype, "license_soA", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerOrderByWithRelationInput.prototype, "architecture", void 0);
SoftwareComputerOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerOrderByWithRelationInput", {
        isAbstract: true
    })
], SoftwareComputerOrderByWithRelationInput);
exports.SoftwareComputerOrderByWithRelationInput = SoftwareComputerOrderByWithRelationInput;
