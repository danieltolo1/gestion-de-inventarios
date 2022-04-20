"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateManyStateInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateManyStateInput_1 = require("../inputs/ProductCreateManyStateInput");
let ProductCreateManyStateInputEnvelope = class ProductCreateManyStateInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductCreateManyStateInput_1.ProductCreateManyStateInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductCreateManyStateInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ProductCreateManyStateInputEnvelope.prototype, "skipDuplicates", void 0);
ProductCreateManyStateInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductCreateManyStateInputEnvelope", {
        isAbstract: true
    })
], ProductCreateManyStateInputEnvelope);
exports.ProductCreateManyStateInputEnvelope = ProductCreateManyStateInputEnvelope;
