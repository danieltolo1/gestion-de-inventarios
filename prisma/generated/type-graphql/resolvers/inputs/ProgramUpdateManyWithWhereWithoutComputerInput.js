"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramUpdateManyWithWhereWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramScalarWhereInput_1 = require("../inputs/ProgramScalarWhereInput");
const ProgramUpdateManyMutationInput_1 = require("../inputs/ProgramUpdateManyMutationInput");
let ProgramUpdateManyWithWhereWithoutComputerInput = class ProgramUpdateManyWithWhereWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramScalarWhereInput_1.ProgramScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramScalarWhereInput_1.ProgramScalarWhereInput)
], ProgramUpdateManyWithWhereWithoutComputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramUpdateManyMutationInput_1.ProgramUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramUpdateManyMutationInput_1.ProgramUpdateManyMutationInput)
], ProgramUpdateManyWithWhereWithoutComputerInput.prototype, "data", void 0);
ProgramUpdateManyWithWhereWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramUpdateManyWithWhereWithoutComputerInput", {
        isAbstract: true
    })
], ProgramUpdateManyWithWhereWithoutComputerInput);
exports.ProgramUpdateManyWithWhereWithoutComputerInput = ProgramUpdateManyWithWhereWithoutComputerInput;
