"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerUpdateWithWhereUniqueWithoutSoftwarecomputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerUpdateWithoutSoftwarecomputerInput_1 = require("../inputs/ComputerUpdateWithoutSoftwarecomputerInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerUpdateWithWhereUniqueWithoutSoftwarecomputerInput = class ComputerUpdateWithWhereUniqueWithoutSoftwarecomputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereUniqueInput_1.ComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereUniqueInput_1.ComputerWhereUniqueInput)
], ComputerUpdateWithWhereUniqueWithoutSoftwarecomputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateWithoutSoftwarecomputerInput_1.ComputerUpdateWithoutSoftwarecomputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateWithoutSoftwarecomputerInput_1.ComputerUpdateWithoutSoftwarecomputerInput)
], ComputerUpdateWithWhereUniqueWithoutSoftwarecomputerInput.prototype, "data", void 0);
ComputerUpdateWithWhereUniqueWithoutSoftwarecomputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerUpdateWithWhereUniqueWithoutSoftwarecomputerInput", {
        isAbstract: true
    })
], ComputerUpdateWithWhereUniqueWithoutSoftwarecomputerInput);
exports.ComputerUpdateWithWhereUniqueWithoutSoftwarecomputerInput = ComputerUpdateWithWhereUniqueWithoutSoftwarecomputerInput;
