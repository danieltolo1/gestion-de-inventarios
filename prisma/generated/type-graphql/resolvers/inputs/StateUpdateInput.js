"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerUpdateManyWithoutStateInput_1 = require("../inputs/ComputerUpdateManyWithoutStateInput");
const ProductUpdateManyWithoutStateInput_1 = require("../inputs/ProductUpdateManyWithoutStateInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let StateUpdateInput = class StateUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], StateUpdateInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutStateInput_1.ProductUpdateManyWithoutStateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpdateManyWithoutStateInput_1.ProductUpdateManyWithoutStateInput)
], StateUpdateInput.prototype, "product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateManyWithoutStateInput_1.ComputerUpdateManyWithoutStateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateManyWithoutStateInput_1.ComputerUpdateManyWithoutStateInput)
], StateUpdateInput.prototype, "computer", void 0);
StateUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("StateUpdateInput", {
        isAbstract: true
    })
], StateUpdateInput);
exports.StateUpdateInput = StateUpdateInput;
