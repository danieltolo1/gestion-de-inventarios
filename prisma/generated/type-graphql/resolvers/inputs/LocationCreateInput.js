"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateNestedManyWithoutLocationInput_1 = require("../inputs/ComputerCreateNestedManyWithoutLocationInput");
const ProductCreateNestedManyWithoutLocationInput_1 = require("../inputs/ProductCreateNestedManyWithoutLocationInput");
let LocationCreateInput = class LocationCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LocationCreateInput.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationCreateInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationCreateInput.prototype, "job_name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateNestedManyWithoutLocationInput_1.ComputerCreateNestedManyWithoutLocationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateNestedManyWithoutLocationInput_1.ComputerCreateNestedManyWithoutLocationInput)
], LocationCreateInput.prototype, "computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutLocationInput_1.ProductCreateNestedManyWithoutLocationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateNestedManyWithoutLocationInput_1.ProductCreateNestedManyWithoutLocationInput)
], LocationCreateInput.prototype, "porduct", void 0);
LocationCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationCreateInput", {
        isAbstract: true
    })
], LocationCreateInput);
exports.LocationCreateInput = LocationCreateInput;
