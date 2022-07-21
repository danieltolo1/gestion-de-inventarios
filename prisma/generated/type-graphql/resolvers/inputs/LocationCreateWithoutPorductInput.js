"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateWithoutPorductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateNestedManyWithoutLocationInput_1 = require("../inputs/ComputerCreateNestedManyWithoutLocationInput");
let LocationCreateWithoutPorductInput = class LocationCreateWithoutPorductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LocationCreateWithoutPorductInput.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationCreateWithoutPorductInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationCreateWithoutPorductInput.prototype, "job_name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateNestedManyWithoutLocationInput_1.ComputerCreateNestedManyWithoutLocationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateNestedManyWithoutLocationInput_1.ComputerCreateNestedManyWithoutLocationInput)
], LocationCreateWithoutPorductInput.prototype, "computer", void 0);
LocationCreateWithoutPorductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationCreateWithoutPorductInput", {
        isAbstract: true
    })
], LocationCreateWithoutPorductInput);
exports.LocationCreateWithoutPorductInput = LocationCreateWithoutPorductInput;
