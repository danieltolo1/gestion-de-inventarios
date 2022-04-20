"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerUpdateManyWithWhereWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerScalarWhereInput_1 = require("../inputs/PartComputerScalarWhereInput");
const PartComputerUpdateManyMutationInput_1 = require("../inputs/PartComputerUpdateManyMutationInput");
let PartComputerUpdateManyWithWhereWithoutComputerInput = class PartComputerUpdateManyWithWhereWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerScalarWhereInput_1.PartComputerScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerScalarWhereInput_1.PartComputerScalarWhereInput)
], PartComputerUpdateManyWithWhereWithoutComputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerUpdateManyMutationInput_1.PartComputerUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerUpdateManyMutationInput_1.PartComputerUpdateManyMutationInput)
], PartComputerUpdateManyWithWhereWithoutComputerInput.prototype, "data", void 0);
PartComputerUpdateManyWithWhereWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerUpdateManyWithWhereWithoutComputerInput", {
        isAbstract: true
    })
], PartComputerUpdateManyWithWhereWithoutComputerInput);
exports.PartComputerUpdateManyWithWhereWithoutComputerInput = PartComputerUpdateManyWithWhereWithoutComputerInput;
