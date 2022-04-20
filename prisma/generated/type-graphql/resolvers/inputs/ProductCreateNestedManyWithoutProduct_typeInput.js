"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateNestedManyWithoutProduct_typeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateManyProduct_typeInputEnvelope_1 = require("../inputs/ProductCreateManyProduct_typeInputEnvelope");
const ProductCreateOrConnectWithoutProduct_typeInput_1 = require("../inputs/ProductCreateOrConnectWithoutProduct_typeInput");
const ProductCreateWithoutProduct_typeInput_1 = require("../inputs/ProductCreateWithoutProduct_typeInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateNestedManyWithoutProduct_typeInput = class ProductCreateNestedManyWithoutProduct_typeInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductCreateWithoutProduct_typeInput_1.ProductCreateWithoutProduct_typeInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductCreateNestedManyWithoutProduct_typeInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutProduct_typeInput_1.ProductCreateOrConnectWithoutProduct_typeInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductCreateNestedManyWithoutProduct_typeInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateManyProduct_typeInputEnvelope_1.ProductCreateManyProduct_typeInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateManyProduct_typeInputEnvelope_1.ProductCreateManyProduct_typeInputEnvelope)
], ProductCreateNestedManyWithoutProduct_typeInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductCreateNestedManyWithoutProduct_typeInput.prototype, "connect", void 0);
ProductCreateNestedManyWithoutProduct_typeInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductCreateNestedManyWithoutProduct_typeInput", {
        isAbstract: true
    })
], ProductCreateNestedManyWithoutProduct_typeInput);
exports.ProductCreateNestedManyWithoutProduct_typeInput = ProductCreateNestedManyWithoutProduct_typeInput;
