"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateNestedManyWithoutStateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateManyStateInputEnvelope_1 = require("../inputs/ProductCreateManyStateInputEnvelope");
const ProductCreateOrConnectWithoutStateInput_1 = require("../inputs/ProductCreateOrConnectWithoutStateInput");
const ProductCreateWithoutStateInput_1 = require("../inputs/ProductCreateWithoutStateInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateNestedManyWithoutStateInput = class ProductCreateNestedManyWithoutStateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductCreateWithoutStateInput_1.ProductCreateWithoutStateInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductCreateNestedManyWithoutStateInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutStateInput_1.ProductCreateOrConnectWithoutStateInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductCreateNestedManyWithoutStateInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateManyStateInputEnvelope_1.ProductCreateManyStateInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateManyStateInputEnvelope_1.ProductCreateManyStateInputEnvelope)
], ProductCreateNestedManyWithoutStateInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductCreateNestedManyWithoutStateInput.prototype, "connect", void 0);
ProductCreateNestedManyWithoutStateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductCreateNestedManyWithoutStateInput", {
        isAbstract: true
    })
], ProductCreateNestedManyWithoutStateInput);
exports.ProductCreateNestedManyWithoutStateInput = ProductCreateNestedManyWithoutStateInput;
