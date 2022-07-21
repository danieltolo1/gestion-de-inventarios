"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateWithoutProduct_typeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationCreateNestedOneWithoutPorductInput_1 = require("../inputs/LocationCreateNestedOneWithoutPorductInput");
const MaintenanceCreateNestedManyWithoutProductInput_1 = require("../inputs/MaintenanceCreateNestedManyWithoutProductInput");
const StateCreateNestedOneWithoutProductInput_1 = require("../inputs/StateCreateNestedOneWithoutProductInput");
let ProductCreateWithoutProduct_typeInput = class ProductCreateWithoutProduct_typeInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutProduct_typeInput.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutProduct_typeInput.prototype, "serial_number", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutProduct_typeInput.prototype, "imei", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutProduct_typeInput.prototype, "observation", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutProduct_typeInput.prototype, "picture", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutProduct_typeInput.prototype, "model", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutProduct_typeInput.prototype, "size", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutProduct_typeInput.prototype, "tecnology", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutProduct_typeInput.prototype, "conectivity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateCreateNestedOneWithoutProductInput_1.StateCreateNestedOneWithoutProductInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", StateCreateNestedOneWithoutProductInput_1.StateCreateNestedOneWithoutProductInput)
], ProductCreateWithoutProduct_typeInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateNestedOneWithoutPorductInput_1.LocationCreateNestedOneWithoutPorductInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateNestedOneWithoutPorductInput_1.LocationCreateNestedOneWithoutPorductInput)
], ProductCreateWithoutProduct_typeInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutProduct_typeInput.prototype, "historial", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCreateNestedManyWithoutProductInput_1.MaintenanceCreateNestedManyWithoutProductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCreateNestedManyWithoutProductInput_1.MaintenanceCreateNestedManyWithoutProductInput)
], ProductCreateWithoutProduct_typeInput.prototype, "maintenance", void 0);
ProductCreateWithoutProduct_typeInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductCreateWithoutProduct_typeInput", {
        isAbstract: true
    })
], ProductCreateWithoutProduct_typeInput);
exports.ProductCreateWithoutProduct_typeInput = ProductCreateWithoutProduct_typeInput;
