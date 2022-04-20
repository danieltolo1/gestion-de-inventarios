"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerCreateWithoutStateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateNestedManyWithoutComputerInput_1 = require("../inputs/PartComputerCreateNestedManyWithoutComputerInput");
const SoftwareComputerCreateNestedOneWithoutComputerInput_1 = require("../inputs/SoftwareComputerCreateNestedOneWithoutComputerInput");
let ComputerCreateWithoutStateInput = class ComputerCreateWithoutStateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], ComputerCreateWithoutStateInput.prototype, "buy_date", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ComputerCreateWithoutStateInput.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutStateInput.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutStateInput.prototype, "serial_number", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutStateInput.prototype, "memory", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutStateInput.prototype, "hard_disk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutStateInput.prototype, "processor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ComputerCreateWithoutStateInput.prototype, "optical_unit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutStateInput.prototype, "model", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerCreateNestedOneWithoutComputerInput_1.SoftwareComputerCreateNestedOneWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerCreateNestedOneWithoutComputerInput_1.SoftwareComputerCreateNestedOneWithoutComputerInput)
], ComputerCreateWithoutStateInput.prototype, "softwarecomputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCreateNestedManyWithoutComputerInput_1.PartComputerCreateNestedManyWithoutComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateNestedManyWithoutComputerInput_1.PartComputerCreateNestedManyWithoutComputerInput)
], ComputerCreateWithoutStateInput.prototype, "partComputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutStateInput.prototype, "observation", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutStateInput.prototype, "historial", void 0);
ComputerCreateWithoutStateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerCreateWithoutStateInput", {
        isAbstract: true
    })
], ComputerCreateWithoutStateInput);
exports.ComputerCreateWithoutStateInput = ComputerCreateWithoutStateInput;
