"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerUpsertWithWhereUniqueWithoutStateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateWithoutStateInput_1 = require("../inputs/ComputerCreateWithoutStateInput");
const ComputerUpdateWithoutStateInput_1 = require("../inputs/ComputerUpdateWithoutStateInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerUpsertWithWhereUniqueWithoutStateInput = class ComputerUpsertWithWhereUniqueWithoutStateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereUniqueInput_1.ComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereUniqueInput_1.ComputerWhereUniqueInput)
], ComputerUpsertWithWhereUniqueWithoutStateInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateWithoutStateInput_1.ComputerUpdateWithoutStateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateWithoutStateInput_1.ComputerUpdateWithoutStateInput)
], ComputerUpsertWithWhereUniqueWithoutStateInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateWithoutStateInput_1.ComputerCreateWithoutStateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateWithoutStateInput_1.ComputerCreateWithoutStateInput)
], ComputerUpsertWithWhereUniqueWithoutStateInput.prototype, "create", void 0);
ComputerUpsertWithWhereUniqueWithoutStateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerUpsertWithWhereUniqueWithoutStateInput", {
        isAbstract: true
    })
], ComputerUpsertWithWhereUniqueWithoutStateInput);
exports.ComputerUpsertWithWhereUniqueWithoutStateInput = ComputerUpsertWithWhereUniqueWithoutStateInput;
