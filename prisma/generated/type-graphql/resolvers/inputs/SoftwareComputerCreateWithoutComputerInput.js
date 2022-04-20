"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerCreateWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramCreateNestedManyWithoutSoftwarecomputerInput_1 = require("../inputs/ProgramCreateNestedManyWithoutSoftwarecomputerInput");
const Enum_Architecture_1 = require("../../enums/Enum_Architecture");
const Enum_Operatigsystem_1 = require("../../enums/Enum_Operatigsystem");
let SoftwareComputerCreateWithoutComputerInput = class SoftwareComputerCreateWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_Operatigsystem_1.Enum_Operatigsystem, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateWithoutComputerInput.prototype, "operatingsystem", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateWithoutComputerInput.prototype, "license_so", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateWithoutComputerInput.prototype, "user_anydesk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateWithoutComputerInput.prototype, "pass_anydesk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateWithoutComputerInput.prototype, "ip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateWithoutComputerInput.prototype, "user_domain", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateWithoutComputerInput.prototype, "pass_domain", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateWithoutComputerInput.prototype, "user_admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateWithoutComputerInput.prototype, "pass_admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateWithoutComputerInput.prototype, "user_local", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateWithoutComputerInput.prototype, "pass_local", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_Architecture_1.Enum_Architecture, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateWithoutComputerInput.prototype, "architecture", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramCreateNestedManyWithoutSoftwarecomputerInput_1.ProgramCreateNestedManyWithoutSoftwarecomputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramCreateNestedManyWithoutSoftwarecomputerInput_1.ProgramCreateNestedManyWithoutSoftwarecomputerInput)
], SoftwareComputerCreateWithoutComputerInput.prototype, "program", void 0);
SoftwareComputerCreateWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerCreateWithoutComputerInput", {
        isAbstract: true
    })
], SoftwareComputerCreateWithoutComputerInput);
exports.SoftwareComputerCreateWithoutComputerInput = SoftwareComputerCreateWithoutComputerInput;
