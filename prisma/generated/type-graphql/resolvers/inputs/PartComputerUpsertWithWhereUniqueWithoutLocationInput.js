"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerUpsertWithWhereUniqueWithoutLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateWithoutLocationInput_1 = require("../inputs/PartComputerCreateWithoutLocationInput");
const PartComputerUpdateWithoutLocationInput_1 = require("../inputs/PartComputerUpdateWithoutLocationInput");
const PartComputerWhereUniqueInput_1 = require("../inputs/PartComputerWhereUniqueInput");
let PartComputerUpsertWithWhereUniqueWithoutLocationInput = class PartComputerUpsertWithWhereUniqueWithoutLocationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput)
], PartComputerUpsertWithWhereUniqueWithoutLocationInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerUpdateWithoutLocationInput_1.PartComputerUpdateWithoutLocationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerUpdateWithoutLocationInput_1.PartComputerUpdateWithoutLocationInput)
], PartComputerUpsertWithWhereUniqueWithoutLocationInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCreateWithoutLocationInput_1.PartComputerCreateWithoutLocationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateWithoutLocationInput_1.PartComputerCreateWithoutLocationInput)
], PartComputerUpsertWithWhereUniqueWithoutLocationInput.prototype, "create", void 0);
PartComputerUpsertWithWhereUniqueWithoutLocationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerUpsertWithWhereUniqueWithoutLocationInput", {
        isAbstract: true
    })
], PartComputerUpsertWithWhereUniqueWithoutLocationInput);
exports.PartComputerUpsertWithWhereUniqueWithoutLocationInput = PartComputerUpsertWithWhereUniqueWithoutLocationInput;
