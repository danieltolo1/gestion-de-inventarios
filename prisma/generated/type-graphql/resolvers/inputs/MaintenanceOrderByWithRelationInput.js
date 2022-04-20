"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerOrderByRelationAggregateInput_1 = require("../inputs/PartComputerOrderByRelationAggregateInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MaintenanceOrderByWithRelationInput = class MaintenanceOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceOrderByWithRelationInput.prototype, "id_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceOrderByWithRelationInput.prototype, "date_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceOrderByWithRelationInput.prototype, "jworkerNameFirm", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], MaintenanceOrderByWithRelationInput.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceOrderByWithRelationInput.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerOrderByRelationAggregateInput_1.PartComputerOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerOrderByRelationAggregateInput_1.PartComputerOrderByRelationAggregateInput)
], MaintenanceOrderByWithRelationInput.prototype, "partComputer", void 0);
MaintenanceOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceOrderByWithRelationInput", {
        isAbstract: true
    })
], MaintenanceOrderByWithRelationInput);
exports.MaintenanceOrderByWithRelationInput = MaintenanceOrderByWithRelationInput;
