"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramCreateNestedManyWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramCreateOrConnectWithoutComputerInput_1 = require("../inputs/ProgramCreateOrConnectWithoutComputerInput");
const ProgramCreateWithoutComputerInput_1 = require("../inputs/ProgramCreateWithoutComputerInput");
const ProgramWhereUniqueInput_1 = require("../inputs/ProgramWhereUniqueInput");
let ProgramCreateNestedManyWithoutComputerInput = class ProgramCreateNestedManyWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramCreateWithoutComputerInput_1.ProgramCreateWithoutComputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramCreateNestedManyWithoutComputerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramCreateOrConnectWithoutComputerInput_1.ProgramCreateOrConnectWithoutComputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramCreateNestedManyWithoutComputerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramWhereUniqueInput_1.ProgramWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramCreateNestedManyWithoutComputerInput.prototype, "connect", void 0);
ProgramCreateNestedManyWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramCreateNestedManyWithoutComputerInput", {
        isAbstract: true
    })
], ProgramCreateNestedManyWithoutComputerInput);
exports.ProgramCreateNestedManyWithoutComputerInput = ProgramCreateNestedManyWithoutComputerInput;
