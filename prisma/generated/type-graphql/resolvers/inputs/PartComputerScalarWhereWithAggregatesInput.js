"use strict";
var PartComputerScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const IntWithAggregatesFilter_1 = require("../inputs/IntWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
let PartComputerScalarWhereWithAggregatesInput = PartComputerScalarWhereWithAggregatesInput_1 = class PartComputerScalarWhereWithAggregatesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerScalarWhereWithAggregatesInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerScalarWhereWithAggregatesInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], PartComputerScalarWhereWithAggregatesInput.prototype, "id_partComputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], PartComputerScalarWhereWithAggregatesInput.prototype, "productId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], PartComputerScalarWhereWithAggregatesInput.prototype, "computerId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], PartComputerScalarWhereWithAggregatesInput.prototype, "locationId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], PartComputerScalarWhereWithAggregatesInput.prototype, "maintenanceId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], PartComputerScalarWhereWithAggregatesInput.prototype, "name_part", void 0);
PartComputerScalarWhereWithAggregatesInput = PartComputerScalarWhereWithAggregatesInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], PartComputerScalarWhereWithAggregatesInput);
exports.PartComputerScalarWhereWithAggregatesInput = PartComputerScalarWhereWithAggregatesInput;
