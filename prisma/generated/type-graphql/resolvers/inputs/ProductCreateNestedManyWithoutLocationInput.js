"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateNestedManyWithoutLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateManyLocationInputEnvelope_1 = require("../inputs/ProductCreateManyLocationInputEnvelope");
const ProductCreateOrConnectWithoutLocationInput_1 = require("../inputs/ProductCreateOrConnectWithoutLocationInput");
const ProductCreateWithoutLocationInput_1 = require("../inputs/ProductCreateWithoutLocationInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateNestedManyWithoutLocationInput = class ProductCreateNestedManyWithoutLocationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductCreateWithoutLocationInput_1.ProductCreateWithoutLocationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductCreateNestedManyWithoutLocationInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutLocationInput_1.ProductCreateOrConnectWithoutLocationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductCreateNestedManyWithoutLocationInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateManyLocationInputEnvelope_1.ProductCreateManyLocationInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateManyLocationInputEnvelope_1.ProductCreateManyLocationInputEnvelope)
], ProductCreateNestedManyWithoutLocationInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductCreateNestedManyWithoutLocationInput.prototype, "connect", void 0);
ProductCreateNestedManyWithoutLocationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductCreateNestedManyWithoutLocationInput", {
        isAbstract: true
    })
], ProductCreateNestedManyWithoutLocationInput);
exports.ProductCreateNestedManyWithoutLocationInput = ProductCreateNestedManyWithoutLocationInput;
