"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerCreateManyComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let PartComputerCreateManyComputerInput = class PartComputerCreateManyComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerCreateManyComputerInput.prototype, "id_partComputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerCreateManyComputerInput.prototype, "productId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerCreateManyComputerInput.prototype, "locationId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerCreateManyComputerInput.prototype, "maintenanceId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerCreateManyComputerInput.prototype, "name_part", void 0);
PartComputerCreateManyComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerCreateManyComputerInput", {
        isAbstract: true
    })
], PartComputerCreateManyComputerInput);
exports.PartComputerCreateManyComputerInput = PartComputerCreateManyComputerInput;
