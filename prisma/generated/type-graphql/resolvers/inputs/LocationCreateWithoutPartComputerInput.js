"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateWithoutPartComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let LocationCreateWithoutPartComputerInput = class LocationCreateWithoutPartComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationCreateWithoutPartComputerInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationCreateWithoutPartComputerInput.prototype, "job_name", void 0);
LocationCreateWithoutPartComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationCreateWithoutPartComputerInput", {
        isAbstract: true
    })
], LocationCreateWithoutPartComputerInput);
exports.LocationCreateWithoutPartComputerInput = LocationCreateWithoutPartComputerInput;
