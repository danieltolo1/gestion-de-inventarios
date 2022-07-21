"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateWithoutMaintenanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationCreateNestedOneWithoutPorductInput_1 = require("../inputs/LocationCreateNestedOneWithoutPorductInput");
const Product_TypeCreateNestedOneWithoutProductInput_1 = require("../inputs/Product_TypeCreateNestedOneWithoutProductInput");
const StateCreateNestedOneWithoutProductInput_1 = require("../inputs/StateCreateNestedOneWithoutProductInput");
let ProductCreateWithoutMaintenanceInput = class ProductCreateWithoutMaintenanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutMaintenanceInput.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutMaintenanceInput.prototype, "serial_number", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutMaintenanceInput.prototype, "imei", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutMaintenanceInput.prototype, "observation", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutMaintenanceInput.prototype, "picture", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutMaintenanceInput.prototype, "model", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeCreateNestedOneWithoutProductInput_1.Product_TypeCreateNestedOneWithoutProductInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeCreateNestedOneWithoutProductInput_1.Product_TypeCreateNestedOneWithoutProductInput)
], ProductCreateWithoutMaintenanceInput.prototype, "product_type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutMaintenanceInput.prototype, "size", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutMaintenanceInput.prototype, "tecnology", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutMaintenanceInput.prototype, "conectivity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateCreateNestedOneWithoutProductInput_1.StateCreateNestedOneWithoutProductInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", StateCreateNestedOneWithoutProductInput_1.StateCreateNestedOneWithoutProductInput)
], ProductCreateWithoutMaintenanceInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationCreateNestedOneWithoutPorductInput_1.LocationCreateNestedOneWithoutPorductInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LocationCreateNestedOneWithoutPorductInput_1.LocationCreateNestedOneWithoutPorductInput)
], ProductCreateWithoutMaintenanceInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductCreateWithoutMaintenanceInput.prototype, "historial", void 0);
ProductCreateWithoutMaintenanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductCreateWithoutMaintenanceInput", {
        isAbstract: true
    })
], ProductCreateWithoutMaintenanceInput);
exports.ProductCreateWithoutMaintenanceInput = ProductCreateWithoutMaintenanceInput;
