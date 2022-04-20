"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateCreateWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateNestedManyWithoutStateInput_1 = require("../inputs/ProductCreateNestedManyWithoutStateInput");
let StateCreateWithoutComputerInput = class StateCreateWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], StateCreateWithoutComputerInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutStateInput_1.ProductCreateNestedManyWithoutStateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateNestedManyWithoutStateInput_1.ProductCreateNestedManyWithoutStateInput)
], StateCreateWithoutComputerInput.prototype, "product", void 0);
StateCreateWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("StateCreateWithoutComputerInput", {
        isAbstract: true
    })
], StateCreateWithoutComputerInput);
exports.StateCreateWithoutComputerInput = StateCreateWithoutComputerInput;
