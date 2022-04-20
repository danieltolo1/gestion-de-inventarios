"use strict";
var MaintenanceScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let MaintenanceScalarWhereInput = MaintenanceScalarWhereInput_1 = class MaintenanceScalarWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceScalarWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceScalarWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceScalarWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceScalarWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceScalarWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceScalarWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFilter_1.IntFilter)
], MaintenanceScalarWhereInput.prototype, "id_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], MaintenanceScalarWhereInput.prototype, "date_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], MaintenanceScalarWhereInput.prototype, "jworkerNameFirm", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], MaintenanceScalarWhereInput.prototype, "userId", void 0);
MaintenanceScalarWhereInput = MaintenanceScalarWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceScalarWhereInput", {
        isAbstract: true
    })
], MaintenanceScalarWhereInput);
exports.MaintenanceScalarWhereInput = MaintenanceScalarWhereInput;
