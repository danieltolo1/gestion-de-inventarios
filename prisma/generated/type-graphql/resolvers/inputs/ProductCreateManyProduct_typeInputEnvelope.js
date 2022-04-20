"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateManyProduct_typeInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateManyProduct_typeInput_1 = require("../inputs/ProductCreateManyProduct_typeInput");
let ProductCreateManyProduct_typeInputEnvelope = class ProductCreateManyProduct_typeInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductCreateManyProduct_typeInput_1.ProductCreateManyProduct_typeInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductCreateManyProduct_typeInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ProductCreateManyProduct_typeInputEnvelope.prototype, "skipDuplicates", void 0);
ProductCreateManyProduct_typeInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductCreateManyProduct_typeInputEnvelope", {
        isAbstract: true
    })
], ProductCreateManyProduct_typeInputEnvelope);
exports.ProductCreateManyProduct_typeInputEnvelope = ProductCreateManyProduct_typeInputEnvelope;
