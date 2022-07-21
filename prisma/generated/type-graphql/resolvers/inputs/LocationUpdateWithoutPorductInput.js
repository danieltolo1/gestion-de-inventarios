"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpdateWithoutPorductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerUpdateManyWithoutLocationInput_1 = require("../inputs/ComputerUpdateManyWithoutLocationInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let LocationUpdateWithoutPorductInput = class LocationUpdateWithoutPorductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], LocationUpdateWithoutPorductInput.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LocationUpdateWithoutPorductInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LocationUpdateWithoutPorductInput.prototype, "job_name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateManyWithoutLocationInput_1.ComputerUpdateManyWithoutLocationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateManyWithoutLocationInput_1.ComputerUpdateManyWithoutLocationInput)
], LocationUpdateWithoutPorductInput.prototype, "computer", void 0);
LocationUpdateWithoutPorductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationUpdateWithoutPorductInput", {
        isAbstract: true
    })
], LocationUpdateWithoutPorductInput);
exports.LocationUpdateWithoutPorductInput = LocationUpdateWithoutPorductInput;
