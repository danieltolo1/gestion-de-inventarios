"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateNestedManyWithoutSoftwarecomputerInput_1 = require("../inputs/ComputerCreateNestedManyWithoutSoftwarecomputerInput");
const Enum_Architecture_1 = require("../../enums/Enum_Architecture");
const Enum_Operatigsystem_1 = require("../../enums/Enum_Operatigsystem");
let SoftwareComputerCreateInput = class SoftwareComputerCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateNestedManyWithoutSoftwarecomputerInput_1.ComputerCreateNestedManyWithoutSoftwarecomputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateNestedManyWithoutSoftwarecomputerInput_1.ComputerCreateNestedManyWithoutSoftwarecomputerInput)
], SoftwareComputerCreateInput.prototype, "computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_Operatigsystem_1.Enum_Operatigsystem, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateInput.prototype, "operatingsystem", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateInput.prototype, "license_soA", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_Architecture_1.Enum_Architecture, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SoftwareComputerCreateInput.prototype, "architecture", void 0);
SoftwareComputerCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerCreateInput", {
        isAbstract: true
    })
], SoftwareComputerCreateInput);
exports.SoftwareComputerCreateInput = SoftwareComputerCreateInput;
