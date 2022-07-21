"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerCreateNestedManyWithoutProgramInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateOrConnectWithoutProgramInput_1 = require("../inputs/ComputerCreateOrConnectWithoutProgramInput");
const ComputerCreateWithoutProgramInput_1 = require("../inputs/ComputerCreateWithoutProgramInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerCreateNestedManyWithoutProgramInput = class ComputerCreateNestedManyWithoutProgramInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerCreateWithoutProgramInput_1.ComputerCreateWithoutProgramInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerCreateNestedManyWithoutProgramInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerCreateOrConnectWithoutProgramInput_1.ComputerCreateOrConnectWithoutProgramInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerCreateNestedManyWithoutProgramInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerWhereUniqueInput_1.ComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerCreateNestedManyWithoutProgramInput.prototype, "connect", void 0);
ComputerCreateNestedManyWithoutProgramInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerCreateNestedManyWithoutProgramInput", {
        isAbstract: true
    })
], ComputerCreateNestedManyWithoutProgramInput);
exports.ComputerCreateNestedManyWithoutProgramInput = ComputerCreateNestedManyWithoutProgramInput;
