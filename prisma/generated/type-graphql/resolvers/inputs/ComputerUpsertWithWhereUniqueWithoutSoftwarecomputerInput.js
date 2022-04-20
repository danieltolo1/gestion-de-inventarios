"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerUpsertWithWhereUniqueWithoutSoftwarecomputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateWithoutSoftwarecomputerInput_1 = require("../inputs/ComputerCreateWithoutSoftwarecomputerInput");
const ComputerUpdateWithoutSoftwarecomputerInput_1 = require("../inputs/ComputerUpdateWithoutSoftwarecomputerInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerUpsertWithWhereUniqueWithoutSoftwarecomputerInput = class ComputerUpsertWithWhereUniqueWithoutSoftwarecomputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereUniqueInput_1.ComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereUniqueInput_1.ComputerWhereUniqueInput)
], ComputerUpsertWithWhereUniqueWithoutSoftwarecomputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateWithoutSoftwarecomputerInput_1.ComputerUpdateWithoutSoftwarecomputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateWithoutSoftwarecomputerInput_1.ComputerUpdateWithoutSoftwarecomputerInput)
], ComputerUpsertWithWhereUniqueWithoutSoftwarecomputerInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateWithoutSoftwarecomputerInput_1.ComputerCreateWithoutSoftwarecomputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateWithoutSoftwarecomputerInput_1.ComputerCreateWithoutSoftwarecomputerInput)
], ComputerUpsertWithWhereUniqueWithoutSoftwarecomputerInput.prototype, "create", void 0);
ComputerUpsertWithWhereUniqueWithoutSoftwarecomputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerUpsertWithWhereUniqueWithoutSoftwarecomputerInput", {
        isAbstract: true
    })
], ComputerUpsertWithWhereUniqueWithoutSoftwarecomputerInput);
exports.ComputerUpsertWithWhereUniqueWithoutSoftwarecomputerInput = ComputerUpsertWithWhereUniqueWithoutSoftwarecomputerInput;
