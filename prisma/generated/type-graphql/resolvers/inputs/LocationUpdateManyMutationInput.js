"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let LocationUpdateManyMutationInput = class LocationUpdateManyMutationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], LocationUpdateManyMutationInput.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LocationUpdateManyMutationInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LocationUpdateManyMutationInput.prototype, "job_name", void 0);
LocationUpdateManyMutationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationUpdateManyMutationInput", {
        isAbstract: true
    })
], LocationUpdateManyMutationInput);
exports.LocationUpdateManyMutationInput = LocationUpdateManyMutationInput;
