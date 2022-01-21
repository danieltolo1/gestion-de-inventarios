"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let InventarioUpdateManyMutationInput = class InventarioUpdateManyMutationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], InventarioUpdateManyMutationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], InventarioUpdateManyMutationInput.prototype, "cantidad", void 0);
InventarioUpdateManyMutationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InventarioUpdateManyMutationInput", {
        isAbstract: true
    })
], InventarioUpdateManyMutationInput);
exports.InventarioUpdateManyMutationInput = InventarioUpdateManyMutationInput;
