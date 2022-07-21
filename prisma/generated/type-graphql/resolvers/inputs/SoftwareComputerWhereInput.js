"use strict";
var SoftwareComputerWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerListRelationFilter_1 = require("../inputs/ComputerListRelationFilter");
const EnumEnum_ArchitectureFilter_1 = require("../inputs/EnumEnum_ArchitectureFilter");
const EnumEnum_OperatigsystemFilter_1 = require("../inputs/EnumEnum_OperatigsystemFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let SoftwareComputerWhereInput = SoftwareComputerWhereInput_1 = class SoftwareComputerWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SoftwareComputerWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SoftwareComputerWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SoftwareComputerWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SoftwareComputerWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SoftwareComputerWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SoftwareComputerWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFilter_1.IntFilter)
], SoftwareComputerWhereInput.prototype, "id_softwarecomputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerListRelationFilter_1.ComputerListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerListRelationFilter_1.ComputerListRelationFilter)
], SoftwareComputerWhereInput.prototype, "computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_OperatigsystemFilter_1.EnumEnum_OperatigsystemFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_OperatigsystemFilter_1.EnumEnum_OperatigsystemFilter)
], SoftwareComputerWhereInput.prototype, "operatingsystem", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], SoftwareComputerWhereInput.prototype, "license_soA", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumEnum_ArchitectureFilter_1.EnumEnum_ArchitectureFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumEnum_ArchitectureFilter_1.EnumEnum_ArchitectureFilter)
], SoftwareComputerWhereInput.prototype, "architecture", void 0);
SoftwareComputerWhereInput = SoftwareComputerWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerWhereInput", {
        isAbstract: true
    })
], SoftwareComputerWhereInput);
exports.SoftwareComputerWhereInput = SoftwareComputerWhereInput;
