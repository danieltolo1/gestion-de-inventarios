"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpdateWithoutPartComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let LocationUpdateWithoutPartComputerInput = class LocationUpdateWithoutPartComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LocationUpdateWithoutPartComputerInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LocationUpdateWithoutPartComputerInput.prototype, "job_name", void 0);
LocationUpdateWithoutPartComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationUpdateWithoutPartComputerInput", {
        isAbstract: true
    })
], LocationUpdateWithoutPartComputerInput);
exports.LocationUpdateWithoutPartComputerInput = LocationUpdateWithoutPartComputerInput;
