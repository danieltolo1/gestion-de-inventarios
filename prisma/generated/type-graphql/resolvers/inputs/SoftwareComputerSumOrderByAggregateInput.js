"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SoftwareComputerSumOrderByAggregateInput = class SoftwareComputerSumOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerSumOrderByAggregateInput.prototype, "id_softwarecomputer", void 0);
SoftwareComputerSumOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerSumOrderByAggregateInput", {
        isAbstract: true
    })
], SoftwareComputerSumOrderByAggregateInput);
exports.SoftwareComputerSumOrderByAggregateInput = SoftwareComputerSumOrderByAggregateInput;
