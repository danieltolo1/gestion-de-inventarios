"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerUpdateWithWhereUniqueWithoutStateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerUpdateWithoutStateInput_1 = require("../inputs/ComputerUpdateWithoutStateInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerUpdateWithWhereUniqueWithoutStateInput = class ComputerUpdateWithWhereUniqueWithoutStateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereUniqueInput_1.ComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereUniqueInput_1.ComputerWhereUniqueInput)
], ComputerUpdateWithWhereUniqueWithoutStateInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateWithoutStateInput_1.ComputerUpdateWithoutStateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateWithoutStateInput_1.ComputerUpdateWithoutStateInput)
], ComputerUpdateWithWhereUniqueWithoutStateInput.prototype, "data", void 0);
ComputerUpdateWithWhereUniqueWithoutStateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerUpdateWithWhereUniqueWithoutStateInput", {
        isAbstract: true
    })
], ComputerUpdateWithWhereUniqueWithoutStateInput);
exports.ComputerUpdateWithWhereUniqueWithoutStateInput = ComputerUpdateWithWhereUniqueWithoutStateInput;
