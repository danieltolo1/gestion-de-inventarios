"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateOneRequiredWithoutPartcomputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateOrConnectWithoutPartcomputerInput_1 = require("../inputs/ProductCreateOrConnectWithoutPartcomputerInput");
const ProductCreateWithoutPartcomputerInput_1 = require("../inputs/ProductCreateWithoutPartcomputerInput");
const ProductUpdateWithoutPartcomputerInput_1 = require("../inputs/ProductUpdateWithoutPartcomputerInput");
const ProductUpsertWithoutPartcomputerInput_1 = require("../inputs/ProductUpsertWithoutPartcomputerInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateOneRequiredWithoutPartcomputerInput = class ProductUpdateOneRequiredWithoutPartcomputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateWithoutPartcomputerInput_1.ProductCreateWithoutPartcomputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateWithoutPartcomputerInput_1.ProductCreateWithoutPartcomputerInput)
], ProductUpdateOneRequiredWithoutPartcomputerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutPartcomputerInput_1.ProductCreateOrConnectWithoutPartcomputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateOrConnectWithoutPartcomputerInput_1.ProductCreateOrConnectWithoutPartcomputerInput)
], ProductUpdateOneRequiredWithoutPartcomputerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpsertWithoutPartcomputerInput_1.ProductUpsertWithoutPartcomputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpsertWithoutPartcomputerInput_1.ProductUpsertWithoutPartcomputerInput)
], ProductUpdateOneRequiredWithoutPartcomputerInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateOneRequiredWithoutPartcomputerInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpdateWithoutPartcomputerInput_1.ProductUpdateWithoutPartcomputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpdateWithoutPartcomputerInput_1.ProductUpdateWithoutPartcomputerInput)
], ProductUpdateOneRequiredWithoutPartcomputerInput.prototype, "update", void 0);
ProductUpdateOneRequiredWithoutPartcomputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutPartcomputerInput", {
        isAbstract: true
    })
], ProductUpdateOneRequiredWithoutPartcomputerInput);
exports.ProductUpdateOneRequiredWithoutPartcomputerInput = ProductUpdateOneRequiredWithoutPartcomputerInput;
