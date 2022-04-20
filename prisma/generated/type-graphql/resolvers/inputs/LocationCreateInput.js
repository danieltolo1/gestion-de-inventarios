"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateNestedManyWithoutLocationInput_1 = require("../inputs/PartComputerCreateNestedManyWithoutLocationInput");
let LocationCreateInput = class LocationCreateInput {
};
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
    TypeGraphQL.Field(_type => PartComputerCreateNestedManyWithoutLocationInput_1.PartComputerCreateNestedManyWithoutLocationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateNestedManyWithoutLocationInput_1.PartComputerCreateNestedManyWithoutLocationInput)
], LocationCreateInput.prototype, "partComputer", void 0);
LocationCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationCreateInput", {
        isAbstract: true
    })
], LocationCreateInput);
exports.LocationCreateInput = LocationCreateInput;
