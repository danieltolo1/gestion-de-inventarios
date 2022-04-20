"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramUpdateManyWithWhereWithoutSoftwarecomputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramScalarWhereInput_1 = require("../inputs/ProgramScalarWhereInput");
const ProgramUpdateManyMutationInput_1 = require("../inputs/ProgramUpdateManyMutationInput");
let ProgramUpdateManyWithWhereWithoutSoftwarecomputerInput = class ProgramUpdateManyWithWhereWithoutSoftwarecomputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramScalarWhereInput_1.ProgramScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramScalarWhereInput_1.ProgramScalarWhereInput)
], ProgramUpdateManyWithWhereWithoutSoftwarecomputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProgramUpdateManyMutationInput_1.ProgramUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProgramUpdateManyMutationInput_1.ProgramUpdateManyMutationInput)
], ProgramUpdateManyWithWhereWithoutSoftwarecomputerInput.prototype, "data", void 0);
ProgramUpdateManyWithWhereWithoutSoftwarecomputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramUpdateManyWithWhereWithoutSoftwarecomputerInput", {
        isAbstract: true
    })
], ProgramUpdateManyWithWhereWithoutSoftwarecomputerInput);
exports.ProgramUpdateManyWithWhereWithoutSoftwarecomputerInput = ProgramUpdateManyWithWhereWithoutSoftwarecomputerInput;
