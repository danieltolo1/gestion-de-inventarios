"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerUpdateManyWithWhereWithoutSoftwarecomputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerScalarWhereInput_1 = require("../inputs/ComputerScalarWhereInput");
const ComputerUpdateManyMutationInput_1 = require("../inputs/ComputerUpdateManyMutationInput");
let ComputerUpdateManyWithWhereWithoutSoftwarecomputerInput = class ComputerUpdateManyWithWhereWithoutSoftwarecomputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerScalarWhereInput_1.ComputerScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerScalarWhereInput_1.ComputerScalarWhereInput)
], ComputerUpdateManyWithWhereWithoutSoftwarecomputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateManyMutationInput_1.ComputerUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateManyMutationInput_1.ComputerUpdateManyMutationInput)
], ComputerUpdateManyWithWhereWithoutSoftwarecomputerInput.prototype, "data", void 0);
ComputerUpdateManyWithWhereWithoutSoftwarecomputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerUpdateManyWithWhereWithoutSoftwarecomputerInput", {
        isAbstract: true
    })
], ComputerUpdateManyWithWhereWithoutSoftwarecomputerInput);
exports.ComputerUpdateManyWithWhereWithoutSoftwarecomputerInput = ComputerUpdateManyWithWhereWithoutSoftwarecomputerInput;
