"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerUpsertWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateWithoutProductInput_1 = require("../inputs/PartComputerCreateWithoutProductInput");
const PartComputerUpdateWithoutProductInput_1 = require("../inputs/PartComputerUpdateWithoutProductInput");
let PartComputerUpsertWithoutProductInput = class PartComputerUpsertWithoutProductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerUpdateWithoutProductInput_1.PartComputerUpdateWithoutProductInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerUpdateWithoutProductInput_1.PartComputerUpdateWithoutProductInput)
], PartComputerUpsertWithoutProductInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCreateWithoutProductInput_1.PartComputerCreateWithoutProductInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateWithoutProductInput_1.PartComputerCreateWithoutProductInput)
], PartComputerUpsertWithoutProductInput.prototype, "create", void 0);
PartComputerUpsertWithoutProductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerUpsertWithoutProductInput", {
        isAbstract: true
    })
], PartComputerUpsertWithoutProductInput);
exports.PartComputerUpsertWithoutProductInput = PartComputerUpsertWithoutProductInput;
