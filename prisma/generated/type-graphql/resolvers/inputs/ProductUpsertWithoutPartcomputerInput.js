"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithoutPartcomputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateWithoutPartcomputerInput_1 = require("../inputs/ProductCreateWithoutPartcomputerInput");
const ProductUpdateWithoutPartcomputerInput_1 = require("../inputs/ProductUpdateWithoutPartcomputerInput");
let ProductUpsertWithoutPartcomputerInput = class ProductUpsertWithoutPartcomputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpdateWithoutPartcomputerInput_1.ProductUpdateWithoutPartcomputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpdateWithoutPartcomputerInput_1.ProductUpdateWithoutPartcomputerInput)
], ProductUpsertWithoutPartcomputerInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateWithoutPartcomputerInput_1.ProductCreateWithoutPartcomputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateWithoutPartcomputerInput_1.ProductCreateWithoutPartcomputerInput)
], ProductUpsertWithoutPartcomputerInput.prototype, "create", void 0);
ProductUpsertWithoutPartcomputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductUpsertWithoutPartcomputerInput", {
        isAbstract: true
    })
], ProductUpsertWithoutPartcomputerInput);
exports.ProductUpsertWithoutPartcomputerInput = ProductUpsertWithoutPartcomputerInput;
