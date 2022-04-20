"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SoftwareComputerAvgOrderByAggregateInput = class SoftwareComputerAvgOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerAvgOrderByAggregateInput.prototype, "id_softwarecomputer", void 0);
SoftwareComputerAvgOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerAvgOrderByAggregateInput", {
        isAbstract: true
    })
], SoftwareComputerAvgOrderByAggregateInput);
exports.SoftwareComputerAvgOrderByAggregateInput = SoftwareComputerAvgOrderByAggregateInput;
