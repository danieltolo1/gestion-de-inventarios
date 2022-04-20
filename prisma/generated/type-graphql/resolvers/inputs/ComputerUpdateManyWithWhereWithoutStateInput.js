"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerUpdateManyWithWhereWithoutStateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerScalarWhereInput_1 = require("../inputs/ComputerScalarWhereInput");
const ComputerUpdateManyMutationInput_1 = require("../inputs/ComputerUpdateManyMutationInput");
let ComputerUpdateManyWithWhereWithoutStateInput = class ComputerUpdateManyWithWhereWithoutStateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerScalarWhereInput_1.ComputerScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerScalarWhereInput_1.ComputerScalarWhereInput)
], ComputerUpdateManyWithWhereWithoutStateInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateManyMutationInput_1.ComputerUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateManyMutationInput_1.ComputerUpdateManyMutationInput)
], ComputerUpdateManyWithWhereWithoutStateInput.prototype, "data", void 0);
ComputerUpdateManyWithWhereWithoutStateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerUpdateManyWithWhereWithoutStateInput", {
        isAbstract: true
    })
], ComputerUpdateManyWithWhereWithoutStateInput);
exports.ComputerUpdateManyWithWhereWithoutStateInput = ComputerUpdateManyWithWhereWithoutStateInput;
