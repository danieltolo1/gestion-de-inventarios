"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateNestedManyWithoutLocationInput_1 = require("../inputs/ProductCreateNestedManyWithoutLocationInput");
let LocationCreateWithoutComputerInput = class LocationCreateWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LocationCreateWithoutComputerInput.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationCreateWithoutComputerInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationCreateWithoutComputerInput.prototype, "job_name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutLocationInput_1.ProductCreateNestedManyWithoutLocationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateNestedManyWithoutLocationInput_1.ProductCreateNestedManyWithoutLocationInput)
], LocationCreateWithoutComputerInput.prototype, "porduct", void 0);
LocationCreateWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationCreateWithoutComputerInput", {
        isAbstract: true
    })
], LocationCreateWithoutComputerInput);
exports.LocationCreateWithoutComputerInput = LocationCreateWithoutComputerInput;
