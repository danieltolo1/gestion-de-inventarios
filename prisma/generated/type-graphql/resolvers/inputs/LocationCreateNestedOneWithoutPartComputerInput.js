"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateNestedOneWithoutPartComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationCreateOrConnectWithoutPartComputerInput_1 = require("../inputs/LocationCreateOrConnectWithoutPartComputerInput");
const LocationCreateWithoutPartComputerInput_1 = require("../inputs/LocationCreateWithoutPartComputerInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationCreateNestedOneWithoutPartComputerInput = class LocationCreateNestedOneWithoutPartComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateWithoutPartComputerInput_1.LocationCreateWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateWithoutPartComputerInput_1.LocationCreateWithoutPartComputerInput)
], LocationCreateNestedOneWithoutPartComputerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutPartComputerInput_1.LocationCreateOrConnectWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateOrConnectWithoutPartComputerInput_1.LocationCreateOrConnectWithoutPartComputerInput)
], LocationCreateNestedOneWithoutPartComputerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], LocationCreateNestedOneWithoutPartComputerInput.prototype, "connect", void 0);
LocationCreateNestedOneWithoutPartComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationCreateNestedOneWithoutPartComputerInput", {
        isAbstract: true
    })
], LocationCreateNestedOneWithoutPartComputerInput);
exports.LocationCreateNestedOneWithoutPartComputerInput = LocationCreateNestedOneWithoutPartComputerInput;
