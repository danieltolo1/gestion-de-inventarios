"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SoftwareComputerCountOrderByAggregateInput = class SoftwareComputerCountOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCountOrderByAggregateInput.prototype, "id_softwarecomputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCountOrderByAggregateInput.prototype, "operatingsystem", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCountOrderByAggregateInput.prototype, "license_soA", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCountOrderByAggregateInput.prototype, "architecture", void 0);
SoftwareComputerCountOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerCountOrderByAggregateInput", {
        isAbstract: true
    })
], SoftwareComputerCountOrderByAggregateInput);
exports.SoftwareComputerCountOrderByAggregateInput = SoftwareComputerCountOrderByAggregateInput;
