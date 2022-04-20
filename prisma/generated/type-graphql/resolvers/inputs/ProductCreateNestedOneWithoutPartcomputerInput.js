"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateNestedOneWithoutPartcomputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateOrConnectWithoutPartcomputerInput_1 = require("../inputs/ProductCreateOrConnectWithoutPartcomputerInput");
const ProductCreateWithoutPartcomputerInput_1 = require("../inputs/ProductCreateWithoutPartcomputerInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateNestedOneWithoutPartcomputerInput = class ProductCreateNestedOneWithoutPartcomputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateWithoutPartcomputerInput_1.ProductCreateWithoutPartcomputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateWithoutPartcomputerInput_1.ProductCreateWithoutPartcomputerInput)
], ProductCreateNestedOneWithoutPartcomputerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutPartcomputerInput_1.ProductCreateOrConnectWithoutPartcomputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateOrConnectWithoutPartcomputerInput_1.ProductCreateOrConnectWithoutPartcomputerInput)
], ProductCreateNestedOneWithoutPartcomputerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateNestedOneWithoutPartcomputerInput.prototype, "connect", void 0);
ProductCreateNestedOneWithoutPartcomputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductCreateNestedOneWithoutPartcomputerInput", {
        isAbstract: true
    })
], ProductCreateNestedOneWithoutPartcomputerInput);
exports.ProductCreateNestedOneWithoutPartcomputerInput = ProductCreateNestedOneWithoutPartcomputerInput;
