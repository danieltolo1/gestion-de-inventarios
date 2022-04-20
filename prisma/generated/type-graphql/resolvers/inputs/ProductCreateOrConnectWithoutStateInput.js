"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateOrConnectWithoutStateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateWithoutStateInput_1 = require("../inputs/ProductCreateWithoutStateInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateOrConnectWithoutStateInput = class ProductCreateOrConnectWithoutStateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutStateInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateWithoutStateInput_1.ProductCreateWithoutStateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateWithoutStateInput_1.ProductCreateWithoutStateInput)
], ProductCreateOrConnectWithoutStateInput.prototype, "create", void 0);
ProductCreateOrConnectWithoutStateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductCreateOrConnectWithoutStateInput", {
        isAbstract: true
    })
], ProductCreateOrConnectWithoutStateInput);
exports.ProductCreateOrConnectWithoutStateInput = ProductCreateOrConnectWithoutStateInput;
