"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerUpdateWithWhereUniqueWithoutLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerUpdateWithoutLocationInput_1 = require("../inputs/ComputerUpdateWithoutLocationInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerUpdateWithWhereUniqueWithoutLocationInput = class ComputerUpdateWithWhereUniqueWithoutLocationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereUniqueInput_1.ComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereUniqueInput_1.ComputerWhereUniqueInput)
], ComputerUpdateWithWhereUniqueWithoutLocationInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateWithoutLocationInput_1.ComputerUpdateWithoutLocationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateWithoutLocationInput_1.ComputerUpdateWithoutLocationInput)
], ComputerUpdateWithWhereUniqueWithoutLocationInput.prototype, "data", void 0);
ComputerUpdateWithWhereUniqueWithoutLocationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerUpdateWithWhereUniqueWithoutLocationInput", {
        isAbstract: true
    })
], ComputerUpdateWithWhereUniqueWithoutLocationInput);
exports.ComputerUpdateWithWhereUniqueWithoutLocationInput = ComputerUpdateWithWhereUniqueWithoutLocationInput;
