"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerCreateManyLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let PartComputerCreateManyLocationInput = class PartComputerCreateManyLocationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerCreateManyLocationInput.prototype, "id_partComputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerCreateManyLocationInput.prototype, "productId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerCreateManyLocationInput.prototype, "computerId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerCreateManyLocationInput.prototype, "maintenanceId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerCreateManyLocationInput.prototype, "name_part", void 0);
PartComputerCreateManyLocationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerCreateManyLocationInput", {
        isAbstract: true
    })
], PartComputerCreateManyLocationInput);
exports.PartComputerCreateManyLocationInput = PartComputerCreateManyLocationInput;
