"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerCreateWithoutPartComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SoftwareComputerCreateNestedOneWithoutComputerInput_1 = require("../inputs/SoftwareComputerCreateNestedOneWithoutComputerInput");
const StateCreateNestedOneWithoutComputerInput_1 = require("../inputs/StateCreateNestedOneWithoutComputerInput");
let ComputerCreateWithoutPartComputerInput = class ComputerCreateWithoutPartComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], ComputerCreateWithoutPartComputerInput.prototype, "buy_date", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ComputerCreateWithoutPartComputerInput.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutPartComputerInput.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutPartComputerInput.prototype, "serial_number", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutPartComputerInput.prototype, "memory", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutPartComputerInput.prototype, "hard_disk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutPartComputerInput.prototype, "processor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ComputerCreateWithoutPartComputerInput.prototype, "optical_unit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutPartComputerInput.prototype, "model", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateCreateNestedOneWithoutComputerInput_1.StateCreateNestedOneWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", StateCreateNestedOneWithoutComputerInput_1.StateCreateNestedOneWithoutComputerInput)
], ComputerCreateWithoutPartComputerInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerCreateNestedOneWithoutComputerInput_1.SoftwareComputerCreateNestedOneWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerCreateNestedOneWithoutComputerInput_1.SoftwareComputerCreateNestedOneWithoutComputerInput)
], ComputerCreateWithoutPartComputerInput.prototype, "softwarecomputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutPartComputerInput.prototype, "observation", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutPartComputerInput.prototype, "historial", void 0);
ComputerCreateWithoutPartComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerCreateWithoutPartComputerInput", {
        isAbstract: true
    })
], ComputerCreateWithoutPartComputerInput);
exports.ComputerCreateWithoutPartComputerInput = ComputerCreateWithoutPartComputerInput;
