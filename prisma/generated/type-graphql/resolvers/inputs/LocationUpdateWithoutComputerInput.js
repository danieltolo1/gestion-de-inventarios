"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpdateWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const ProductUpdateManyWithoutLocationInput_1 = require("../inputs/ProductUpdateManyWithoutLocationInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let LocationUpdateWithoutComputerInput = class LocationUpdateWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], LocationUpdateWithoutComputerInput.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LocationUpdateWithoutComputerInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LocationUpdateWithoutComputerInput.prototype, "job_name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutLocationInput_1.ProductUpdateManyWithoutLocationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpdateManyWithoutLocationInput_1.ProductUpdateManyWithoutLocationInput)
], LocationUpdateWithoutComputerInput.prototype, "porduct", void 0);
LocationUpdateWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationUpdateWithoutComputerInput", {
        isAbstract: true
    })
], LocationUpdateWithoutComputerInput);
exports.LocationUpdateWithoutComputerInput = LocationUpdateWithoutComputerInput;
