"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerUpdateManyWithWhereWithoutProgramInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerScalarWhereInput_1 = require("../inputs/ComputerScalarWhereInput");
const ComputerUpdateManyMutationInput_1 = require("../inputs/ComputerUpdateManyMutationInput");
let ComputerUpdateManyWithWhereWithoutProgramInput = class ComputerUpdateManyWithWhereWithoutProgramInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerScalarWhereInput_1.ComputerScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerScalarWhereInput_1.ComputerScalarWhereInput)
], ComputerUpdateManyWithWhereWithoutProgramInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateManyMutationInput_1.ComputerUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateManyMutationInput_1.ComputerUpdateManyMutationInput)
], ComputerUpdateManyWithWhereWithoutProgramInput.prototype, "data", void 0);
ComputerUpdateManyWithWhereWithoutProgramInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerUpdateManyWithWhereWithoutProgramInput", {
        isAbstract: true
    })
], ComputerUpdateManyWithWhereWithoutProgramInput);
exports.ComputerUpdateManyWithWhereWithoutProgramInput = ComputerUpdateManyWithWhereWithoutProgramInput;
