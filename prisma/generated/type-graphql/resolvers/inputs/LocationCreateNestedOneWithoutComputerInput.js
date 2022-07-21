"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateNestedOneWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationCreateOrConnectWithoutComputerInput_1 = require("../inputs/LocationCreateOrConnectWithoutComputerInput");
const LocationCreateWithoutComputerInput_1 = require("../inputs/LocationCreateWithoutComputerInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationCreateNestedOneWithoutComputerInput = class LocationCreateNestedOneWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateWithoutComputerInput_1.LocationCreateWithoutComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateWithoutComputerInput_1.LocationCreateWithoutComputerInput)
], LocationCreateNestedOneWithoutComputerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutComputerInput_1.LocationCreateOrConnectWithoutComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateOrConnectWithoutComputerInput_1.LocationCreateOrConnectWithoutComputerInput)
], LocationCreateNestedOneWithoutComputerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], LocationCreateNestedOneWithoutComputerInput.prototype, "connect", void 0);
LocationCreateNestedOneWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationCreateNestedOneWithoutComputerInput", {
        isAbstract: true
    })
], LocationCreateNestedOneWithoutComputerInput);
exports.LocationCreateNestedOneWithoutComputerInput = LocationCreateNestedOneWithoutComputerInput;
