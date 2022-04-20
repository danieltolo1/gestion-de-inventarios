"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateOrConnectWithoutPartcomputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateWithoutPartcomputerInput_1 = require("../inputs/ProductCreateWithoutPartcomputerInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateOrConnectWithoutPartcomputerInput = class ProductCreateOrConnectWithoutPartcomputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutPartcomputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateWithoutPartcomputerInput_1.ProductCreateWithoutPartcomputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateWithoutPartcomputerInput_1.ProductCreateWithoutPartcomputerInput)
], ProductCreateOrConnectWithoutPartcomputerInput.prototype, "create", void 0);
ProductCreateOrConnectWithoutPartcomputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductCreateOrConnectWithoutPartcomputerInput", {
        isAbstract: true
    })
], ProductCreateOrConnectWithoutPartcomputerInput);
exports.ProductCreateOrConnectWithoutPartcomputerInput = ProductCreateOrConnectWithoutPartcomputerInput;
