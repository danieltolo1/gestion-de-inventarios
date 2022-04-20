"use strict";
var PartComputerScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let PartComputerScalarWhereInput = PartComputerScalarWhereInput_1 = class PartComputerScalarWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerScalarWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerScalarWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerScalarWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerScalarWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerScalarWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerScalarWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFilter_1.IntFilter)
], PartComputerScalarWhereInput.prototype, "id_partComputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFilter_1.IntFilter)
], PartComputerScalarWhereInput.prototype, "productId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFilter_1.IntFilter)
], PartComputerScalarWhereInput.prototype, "computerId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFilter_1.IntFilter)
], PartComputerScalarWhereInput.prototype, "locationId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFilter_1.IntFilter)
], PartComputerScalarWhereInput.prototype, "maintenanceId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], PartComputerScalarWhereInput.prototype, "name_part", void 0);
PartComputerScalarWhereInput = PartComputerScalarWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerScalarWhereInput", {
        isAbstract: true
    })
], PartComputerScalarWhereInput);
exports.PartComputerScalarWhereInput = PartComputerScalarWhereInput;
