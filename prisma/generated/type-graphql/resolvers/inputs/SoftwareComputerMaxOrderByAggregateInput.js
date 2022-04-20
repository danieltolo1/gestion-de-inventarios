"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SoftwareComputerMaxOrderByAggregateInput = class SoftwareComputerMaxOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerMaxOrderByAggregateInput.prototype, "id_softwarecomputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerMaxOrderByAggregateInput.prototype, "operatingsystem", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerMaxOrderByAggregateInput.prototype, "license_so", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerMaxOrderByAggregateInput.prototype, "user_anydesk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerMaxOrderByAggregateInput.prototype, "pass_anydesk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerMaxOrderByAggregateInput.prototype, "ip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerMaxOrderByAggregateInput.prototype, "user_domain", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerMaxOrderByAggregateInput.prototype, "pass_domain", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerMaxOrderByAggregateInput.prototype, "user_admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerMaxOrderByAggregateInput.prototype, "pass_admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerMaxOrderByAggregateInput.prototype, "user_local", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerMaxOrderByAggregateInput.prototype, "pass_local", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerMaxOrderByAggregateInput.prototype, "architecture", void 0);
SoftwareComputerMaxOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerMaxOrderByAggregateInput", {
        isAbstract: true
    })
], SoftwareComputerMaxOrderByAggregateInput);
exports.SoftwareComputerMaxOrderByAggregateInput = SoftwareComputerMaxOrderByAggregateInput;
