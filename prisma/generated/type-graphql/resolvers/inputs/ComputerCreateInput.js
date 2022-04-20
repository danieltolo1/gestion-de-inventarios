"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateNestedManyWithoutComputerInput_1 = require("../inputs/PartComputerCreateNestedManyWithoutComputerInput");
const SoftwareComputerCreateNestedOneWithoutComputerInput_1 = require("../inputs/SoftwareComputerCreateNestedOneWithoutComputerInput");
const StateCreateNestedOneWithoutComputerInput_1 = require("../inputs/StateCreateNestedOneWithoutComputerInput");
let ComputerCreateInput = class ComputerCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], ComputerCreateInput.prototype, "buy_date", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ComputerCreateInput.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateInput.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateInput.prototype, "serial_number", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateInput.prototype, "memory", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateInput.prototype, "hard_disk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateInput.prototype, "processor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ComputerCreateInput.prototype, "optical_unit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateInput.prototype, "model", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateCreateNestedOneWithoutComputerInput_1.StateCreateNestedOneWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", StateCreateNestedOneWithoutComputerInput_1.StateCreateNestedOneWithoutComputerInput)
], ComputerCreateInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerCreateNestedOneWithoutComputerInput_1.SoftwareComputerCreateNestedOneWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerCreateNestedOneWithoutComputerInput_1.SoftwareComputerCreateNestedOneWithoutComputerInput)
], ComputerCreateInput.prototype, "softwarecomputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCreateNestedManyWithoutComputerInput_1.PartComputerCreateNestedManyWithoutComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateNestedManyWithoutComputerInput_1.PartComputerCreateNestedManyWithoutComputerInput)
], ComputerCreateInput.prototype, "partComputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateInput.prototype, "observation", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateInput.prototype, "historial", void 0);
ComputerCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerCreateInput", {
        isAbstract: true
    })
], ComputerCreateInput);
exports.ComputerCreateInput = ComputerCreateInput;
