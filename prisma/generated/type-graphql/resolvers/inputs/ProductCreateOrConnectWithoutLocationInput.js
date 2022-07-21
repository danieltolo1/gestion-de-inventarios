"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateOrConnectWithoutLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateWithoutLocationInput_1 = require("../inputs/ProductCreateWithoutLocationInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateOrConnectWithoutLocationInput = class ProductCreateOrConnectWithoutLocationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutLocationInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateWithoutLocationInput_1.ProductCreateWithoutLocationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateWithoutLocationInput_1.ProductCreateWithoutLocationInput)
], ProductCreateOrConnectWithoutLocationInput.prototype, "create", void 0);
ProductCreateOrConnectWithoutLocationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductCreateOrConnectWithoutLocationInput", {
        isAbstract: true
    })
], ProductCreateOrConnectWithoutLocationInput);
exports.ProductCreateOrConnectWithoutLocationInput = ProductCreateOrConnectWithoutLocationInput;
