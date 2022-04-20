"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerUpsertWithoutPartComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateWithoutPartComputerInput_1 = require("../inputs/ComputerCreateWithoutPartComputerInput");
const ComputerUpdateWithoutPartComputerInput_1 = require("../inputs/ComputerUpdateWithoutPartComputerInput");
let ComputerUpsertWithoutPartComputerInput = class ComputerUpsertWithoutPartComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateWithoutPartComputerInput_1.ComputerUpdateWithoutPartComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateWithoutPartComputerInput_1.ComputerUpdateWithoutPartComputerInput)
], ComputerUpsertWithoutPartComputerInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateWithoutPartComputerInput_1.ComputerCreateWithoutPartComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateWithoutPartComputerInput_1.ComputerCreateWithoutPartComputerInput)
], ComputerUpsertWithoutPartComputerInput.prototype, "create", void 0);
ComputerUpsertWithoutPartComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerUpsertWithoutPartComputerInput", {
        isAbstract: true
    })
], ComputerUpsertWithoutPartComputerInput);
exports.ComputerUpsertWithoutPartComputerInput = ComputerUpsertWithoutPartComputerInput;
