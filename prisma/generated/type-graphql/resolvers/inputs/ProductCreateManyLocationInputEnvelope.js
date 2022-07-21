"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateManyLocationInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateManyLocationInput_1 = require("../inputs/ProductCreateManyLocationInput");
let ProductCreateManyLocationInputEnvelope = class ProductCreateManyLocationInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProductCreateManyLocationInput_1.ProductCreateManyLocationInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProductCreateManyLocationInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ProductCreateManyLocationInputEnvelope.prototype, "skipDuplicates", void 0);
ProductCreateManyLocationInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductCreateManyLocationInputEnvelope", {
        isAbstract: true
    })
], ProductCreateManyLocationInputEnvelope);
exports.ProductCreateManyLocationInputEnvelope = ProductCreateManyLocationInputEnvelope;
