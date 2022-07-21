"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerUpsertWithWhereUniqueWithoutLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateWithoutLocationInput_1 = require("../inputs/ComputerCreateWithoutLocationInput");
const ComputerUpdateWithoutLocationInput_1 = require("../inputs/ComputerUpdateWithoutLocationInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerUpsertWithWhereUniqueWithoutLocationInput = class ComputerUpsertWithWhereUniqueWithoutLocationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereUniqueInput_1.ComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereUniqueInput_1.ComputerWhereUniqueInput)
], ComputerUpsertWithWhereUniqueWithoutLocationInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateWithoutLocationInput_1.ComputerUpdateWithoutLocationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateWithoutLocationInput_1.ComputerUpdateWithoutLocationInput)
], ComputerUpsertWithWhereUniqueWithoutLocationInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateWithoutLocationInput_1.ComputerCreateWithoutLocationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateWithoutLocationInput_1.ComputerCreateWithoutLocationInput)
], ComputerUpsertWithWhereUniqueWithoutLocationInput.prototype, "create", void 0);
ComputerUpsertWithWhereUniqueWithoutLocationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerUpsertWithWhereUniqueWithoutLocationInput", {
        isAbstract: true
    })
], ComputerUpsertWithWhereUniqueWithoutLocationInput);
exports.ComputerUpsertWithWhereUniqueWithoutLocationInput = ComputerUpsertWithWhereUniqueWithoutLocationInput;
