"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerUpdateManyWithoutLocationInput_1 = require("../inputs/PartComputerUpdateManyWithoutLocationInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let LocationUpdateInput = class LocationUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LocationUpdateInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LocationUpdateInput.prototype, "job_name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerUpdateManyWithoutLocationInput_1.PartComputerUpdateManyWithoutLocationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerUpdateManyWithoutLocationInput_1.PartComputerUpdateManyWithoutLocationInput)
], LocationUpdateInput.prototype, "partComputer", void 0);
LocationUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationUpdateInput", {
        isAbstract: true
    })
], LocationUpdateInput);
exports.LocationUpdateInput = LocationUpdateInput;
