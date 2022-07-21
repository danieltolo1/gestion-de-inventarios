"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SoftwareComputerMinOrderByAggregateInput = class SoftwareComputerMinOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerMinOrderByAggregateInput.prototype, "id_softwarecomputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerMinOrderByAggregateInput.prototype, "operatingsystem", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerMinOrderByAggregateInput.prototype, "license_soA", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerMinOrderByAggregateInput.prototype, "architecture", void 0);
SoftwareComputerMinOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerMinOrderByAggregateInput", {
        isAbstract: true
    })
], SoftwareComputerMinOrderByAggregateInput);
exports.SoftwareComputerMinOrderByAggregateInput = SoftwareComputerMinOrderByAggregateInput;
