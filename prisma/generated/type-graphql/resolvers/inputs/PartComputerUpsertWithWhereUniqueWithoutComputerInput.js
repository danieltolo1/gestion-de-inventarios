"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerUpsertWithWhereUniqueWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateWithoutComputerInput_1 = require("../inputs/PartComputerCreateWithoutComputerInput");
const PartComputerUpdateWithoutComputerInput_1 = require("../inputs/PartComputerUpdateWithoutComputerInput");
const PartComputerWhereUniqueInput_1 = require("../inputs/PartComputerWhereUniqueInput");
let PartComputerUpsertWithWhereUniqueWithoutComputerInput = class PartComputerUpsertWithWhereUniqueWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput)
], PartComputerUpsertWithWhereUniqueWithoutComputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerUpdateWithoutComputerInput_1.PartComputerUpdateWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerUpdateWithoutComputerInput_1.PartComputerUpdateWithoutComputerInput)
], PartComputerUpsertWithWhereUniqueWithoutComputerInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCreateWithoutComputerInput_1.PartComputerCreateWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateWithoutComputerInput_1.PartComputerCreateWithoutComputerInput)
], PartComputerUpsertWithWhereUniqueWithoutComputerInput.prototype, "create", void 0);
PartComputerUpsertWithWhereUniqueWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerUpsertWithWhereUniqueWithoutComputerInput", {
        isAbstract: true
    })
], PartComputerUpsertWithWhereUniqueWithoutComputerInput);
exports.PartComputerUpsertWithWhereUniqueWithoutComputerInput = PartComputerUpsertWithWhereUniqueWithoutComputerInput;
