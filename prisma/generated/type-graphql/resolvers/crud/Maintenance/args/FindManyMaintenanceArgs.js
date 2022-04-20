"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyMaintenanceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceOrderByWithRelationInput_1 = require("../../../inputs/MaintenanceOrderByWithRelationInput");
const MaintenanceWhereInput_1 = require("../../../inputs/MaintenanceWhereInput");
const MaintenanceWhereUniqueInput_1 = require("../../../inputs/MaintenanceWhereUniqueInput");
const MaintenanceScalarFieldEnum_1 = require("../../../../enums/MaintenanceScalarFieldEnum");
let FindManyMaintenanceArgs = class FindManyMaintenanceArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereInput_1.MaintenanceWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereInput_1.MaintenanceWhereInput)
], FindManyMaintenanceArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceOrderByWithRelationInput_1.MaintenanceOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyMaintenanceArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceWhereUniqueInput_1.MaintenanceWhereUniqueInput)
], FindManyMaintenanceArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyMaintenanceArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyMaintenanceArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceScalarFieldEnum_1.MaintenanceScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyMaintenanceArgs.prototype, "distinct", void 0);
FindManyMaintenanceArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindManyMaintenanceArgs);
exports.FindManyMaintenanceArgs = FindManyMaintenanceArgs;
