"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerUpdateManyWithoutLocationInput_1 = require("../inputs/ComputerUpdateManyWithoutLocationInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const ProductUpdateManyWithoutLocationInput_1 = require("../inputs/ProductUpdateManyWithoutLocationInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let LocationUpdateInput = class LocationUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], LocationUpdateInput.prototype, "internal_code", void 0);
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
    TypeGraphQL.Field(_type => ComputerUpdateManyWithoutLocationInput_1.ComputerUpdateManyWithoutLocationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateManyWithoutLocationInput_1.ComputerUpdateManyWithoutLocationInput)
], LocationUpdateInput.prototype, "computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutLocationInput_1.ProductUpdateManyWithoutLocationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpdateManyWithoutLocationInput_1.ProductUpdateManyWithoutLocationInput)
], LocationUpdateInput.prototype, "porduct", void 0);
LocationUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationUpdateInput", {
        isAbstract: true
    })
], LocationUpdateInput);
exports.LocationUpdateInput = LocationUpdateInput;
