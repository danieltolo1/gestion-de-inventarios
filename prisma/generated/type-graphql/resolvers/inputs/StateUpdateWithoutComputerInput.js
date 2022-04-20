"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateUpdateWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductUpdateManyWithoutStateInput_1 = require("../inputs/ProductUpdateManyWithoutStateInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let StateUpdateWithoutComputerInput = class StateUpdateWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], StateUpdateWithoutComputerInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutStateInput_1.ProductUpdateManyWithoutStateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpdateManyWithoutStateInput_1.ProductUpdateManyWithoutStateInput)
], StateUpdateWithoutComputerInput.prototype, "product", void 0);
StateUpdateWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("StateUpdateWithoutComputerInput", {
        isAbstract: true
    })
], StateUpdateWithoutComputerInput);
exports.StateUpdateWithoutComputerInput = StateUpdateWithoutComputerInput;
