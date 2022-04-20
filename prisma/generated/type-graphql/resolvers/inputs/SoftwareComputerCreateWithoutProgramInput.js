"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerCreateWithoutProgramInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateNestedManyWithoutSoftwarecomputerInput_1 = require("../inputs/ComputerCreateNestedManyWithoutSoftwarecomputerInput");
const Enum_Architecture_1 = require("../../enums/Enum_Architecture");
const Enum_Operatigsystem_1 = require("../../enums/Enum_Operatigsystem");
let SoftwareComputerCreateWithoutProgramInput = class SoftwareComputerCreateWithoutProgramInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateNestedManyWithoutSoftwarecomputerInput_1.ComputerCreateNestedManyWithoutSoftwarecomputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateNestedManyWithoutSoftwarecomputerInput_1.ComputerCreateNestedManyWithoutSoftwarecomputerInput)
], SoftwareComputerCreateWithoutProgramInput.prototype, "computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_Operatigsystem_1.Enum_Operatigsystem, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateWithoutProgramInput.prototype, "operatingsystem", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateWithoutProgramInput.prototype, "license_so", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateWithoutProgramInput.prototype, "user_anydesk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateWithoutProgramInput.prototype, "pass_anydesk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateWithoutProgramInput.prototype, "ip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateWithoutProgramInput.prototype, "user_domain", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateWithoutProgramInput.prototype, "pass_domain", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateWithoutProgramInput.prototype, "user_admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateWithoutProgramInput.prototype, "pass_admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateWithoutProgramInput.prototype, "user_local", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateWithoutProgramInput.prototype, "pass_local", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_Architecture_1.Enum_Architecture, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateWithoutProgramInput.prototype, "architecture", void 0);
SoftwareComputerCreateWithoutProgramInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerCreateWithoutProgramInput", {
        isAbstract: true
    })
], SoftwareComputerCreateWithoutProgramInput);
exports.SoftwareComputerCreateWithoutProgramInput = SoftwareComputerCreateWithoutProgramInput;
