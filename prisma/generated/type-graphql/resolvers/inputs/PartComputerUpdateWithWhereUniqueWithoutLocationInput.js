"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerUpdateWithWhereUniqueWithoutLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerUpdateWithoutLocationInput_1 = require("../inputs/PartComputerUpdateWithoutLocationInput");
const PartComputerWhereUniqueInput_1 = require("../inputs/PartComputerWhereUniqueInput");
let PartComputerUpdateWithWhereUniqueWithoutLocationInput = class PartComputerUpdateWithWhereUniqueWithoutLocationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput)
], PartComputerUpdateWithWhereUniqueWithoutLocationInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerUpdateWithoutLocationInput_1.PartComputerUpdateWithoutLocationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerUpdateWithoutLocationInput_1.PartComputerUpdateWithoutLocationInput)
], PartComputerUpdateWithWhereUniqueWithoutLocationInput.prototype, "data", void 0);
PartComputerUpdateWithWhereUniqueWithoutLocationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerUpdateWithWhereUniqueWithoutLocationInput", {
        isAbstract: true
    })
], PartComputerUpdateWithWhereUniqueWithoutLocationInput);
exports.PartComputerUpdateWithWhereUniqueWithoutLocationInput = PartComputerUpdateWithWhereUniqueWithoutLocationInput;
