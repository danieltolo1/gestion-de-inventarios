"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerUpsertWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SoftwareComputerCreateWithoutComputerInput_1 = require("../inputs/SoftwareComputerCreateWithoutComputerInput");
const SoftwareComputerUpdateWithoutComputerInput_1 = require("../inputs/SoftwareComputerUpdateWithoutComputerInput");
let SoftwareComputerUpsertWithoutComputerInput = class SoftwareComputerUpsertWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerUpdateWithoutComputerInput_1.SoftwareComputerUpdateWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerUpdateWithoutComputerInput_1.SoftwareComputerUpdateWithoutComputerInput)
], SoftwareComputerUpsertWithoutComputerInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerCreateWithoutComputerInput_1.SoftwareComputerCreateWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerCreateWithoutComputerInput_1.SoftwareComputerCreateWithoutComputerInput)
], SoftwareComputerUpsertWithoutComputerInput.prototype, "create", void 0);
SoftwareComputerUpsertWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerUpsertWithoutComputerInput", {
        isAbstract: true
    })
], SoftwareComputerUpsertWithoutComputerInput);
exports.SoftwareComputerUpsertWithoutComputerInput = SoftwareComputerUpsertWithoutComputerInput;
