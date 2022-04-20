"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerUpdateWithWhereUniqueWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerUpdateWithoutComputerInput_1 = require("../inputs/PartComputerUpdateWithoutComputerInput");
const PartComputerWhereUniqueInput_1 = require("../inputs/PartComputerWhereUniqueInput");
let PartComputerUpdateWithWhereUniqueWithoutComputerInput = class PartComputerUpdateWithWhereUniqueWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput)
], PartComputerUpdateWithWhereUniqueWithoutComputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerUpdateWithoutComputerInput_1.PartComputerUpdateWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerUpdateWithoutComputerInput_1.PartComputerUpdateWithoutComputerInput)
], PartComputerUpdateWithWhereUniqueWithoutComputerInput.prototype, "data", void 0);
PartComputerUpdateWithWhereUniqueWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerUpdateWithWhereUniqueWithoutComputerInput", {
        isAbstract: true
    })
], PartComputerUpdateWithWhereUniqueWithoutComputerInput);
exports.PartComputerUpdateWithWhereUniqueWithoutComputerInput = PartComputerUpdateWithWhereUniqueWithoutComputerInput;
