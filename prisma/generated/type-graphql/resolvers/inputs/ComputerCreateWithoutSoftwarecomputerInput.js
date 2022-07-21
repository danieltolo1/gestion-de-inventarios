"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerCreateWithoutSoftwarecomputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationCreateNestedOneWithoutComputerInput_1 = require("../inputs/LocationCreateNestedOneWithoutComputerInput");
const MaintenanceCreateNestedManyWithoutComputerInput_1 = require("../inputs/MaintenanceCreateNestedManyWithoutComputerInput");
const ProgramCreateNestedManyWithoutComputerInput_1 = require("../inputs/ProgramCreateNestedManyWithoutComputerInput");
const StateCreateNestedOneWithoutComputerInput_1 = require("../inputs/StateCreateNestedOneWithoutComputerInput");
let ComputerCreateWithoutSoftwarecomputerInput = class ComputerCreateWithoutSoftwarecomputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], ComputerCreateWithoutSoftwarecomputerInput.prototype, "buy_date", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ComputerCreateWithoutSoftwarecomputerInput.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutSoftwarecomputerInput.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutSoftwarecomputerInput.prototype, "serial_number", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutSoftwarecomputerInput.prototype, "memory", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutSoftwarecomputerInput.prototype, "hard_disk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutSoftwarecomputerInput.prototype, "processor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ComputerCreateWithoutSoftwarecomputerInput.prototype, "optical_unit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutSoftwarecomputerInput.prototype, "model", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateCreateNestedOneWithoutComputerInput_1.StateCreateNestedOneWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", StateCreateNestedOneWithoutComputerInput_1.StateCreateNestedOneWithoutComputerInput)
], ComputerCreateWithoutSoftwarecomputerInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutSoftwarecomputerInput.prototype, "ip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateNestedOneWithoutComputerInput_1.LocationCreateNestedOneWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateNestedOneWithoutComputerInput_1.LocationCreateNestedOneWithoutComputerInput)
], ComputerCreateWithoutSoftwarecomputerInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutSoftwarecomputerInput.prototype, "observation", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutSoftwarecomputerInput.prototype, "historial", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutSoftwarecomputerInput.prototype, "user_domain", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutSoftwarecomputerInput.prototype, "pass_domain", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutSoftwarecomputerInput.prototype, "user_admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutSoftwarecomputerInput.prototype, "pass_admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutSoftwarecomputerInput.prototype, "user_local", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutSoftwarecomputerInput.prototype, "pass_local", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutSoftwarecomputerInput.prototype, "user_anydesk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ComputerCreateWithoutSoftwarecomputerInput.prototype, "pass_anydesk", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCreateNestedManyWithoutComputerInput_1.MaintenanceCreateNestedManyWithoutComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCreateNestedManyWithoutComputerInput_1.MaintenanceCreateNestedManyWithoutComputerInput)
], ComputerCreateWithoutSoftwarecomputerInput.prototype, "maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramCreateNestedManyWithoutComputerInput_1.ProgramCreateNestedManyWithoutComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProgramCreateNestedManyWithoutComputerInput_1.ProgramCreateNestedManyWithoutComputerInput)
], ComputerCreateWithoutSoftwarecomputerInput.prototype, "program", void 0);
ComputerCreateWithoutSoftwarecomputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerCreateWithoutSoftwarecomputerInput", {
        isAbstract: true
    })
], ComputerCreateWithoutSoftwarecomputerInput);
exports.ComputerCreateWithoutSoftwarecomputerInput = ComputerCreateWithoutSoftwarecomputerInput;
