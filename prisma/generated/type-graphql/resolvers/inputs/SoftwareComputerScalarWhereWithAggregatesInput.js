"use strict";
var SoftwareComputerScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EnumEnum_ArchitectureWithAggregatesFilter_1 = require("../inputs/EnumEnum_ArchitectureWithAggregatesFilter");
const EnumEnum_OperatigsystemWithAggregatesFilter_1 = require("../inputs/EnumEnum_OperatigsystemWithAggregatesFilter");
const IntWithAggregatesFilter_1 = require("../inputs/IntWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let SoftwareComputerScalarWhereWithAggregatesInput = SoftwareComputerScalarWhereWithAggregatesInput_1 = class SoftwareComputerScalarWhereWithAggregatesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SoftwareComputerScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SoftwareComputerScalarWhereWithAggregatesInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SoftwareComputerScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SoftwareComputerScalarWhereWithAggregatesInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SoftwareComputerScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SoftwareComputerScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], SoftwareComputerScalarWhereWithAggregatesInput.prototype, "id_softwarecomputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_OperatigsystemWithAggregatesFilter_1.EnumEnum_OperatigsystemWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_OperatigsystemWithAggregatesFilter_1.EnumEnum_OperatigsystemWithAggregatesFilter)
], SoftwareComputerScalarWhereWithAggregatesInput.prototype, "operatingsystem", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], SoftwareComputerScalarWhereWithAggregatesInput.prototype, "license_soA", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_ArchitectureWithAggregatesFilter_1.EnumEnum_ArchitectureWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_ArchitectureWithAggregatesFilter_1.EnumEnum_ArchitectureWithAggregatesFilter)
], SoftwareComputerScalarWhereWithAggregatesInput.prototype, "architecture", void 0);
SoftwareComputerScalarWhereWithAggregatesInput = SoftwareComputerScalarWhereWithAggregatesInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], SoftwareComputerScalarWhereWithAggregatesInput);
exports.SoftwareComputerScalarWhereWithAggregatesInput = SoftwareComputerScalarWhereWithAggregatesInput;
