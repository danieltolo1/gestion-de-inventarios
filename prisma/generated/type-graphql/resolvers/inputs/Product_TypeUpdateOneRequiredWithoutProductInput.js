"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_TypeUpdateOneRequiredWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Product_TypeCreateOrConnectWithoutProductInput_1 = require("../inputs/Product_TypeCreateOrConnectWithoutProductInput");
const Product_TypeCreateWithoutProductInput_1 = require("../inputs/Product_TypeCreateWithoutProductInput");
const Product_TypeUpdateWithoutProductInput_1 = require("../inputs/Product_TypeUpdateWithoutProductInput");
const Product_TypeUpsertWithoutProductInput_1 = require("../inputs/Product_TypeUpsertWithoutProductInput");
const Product_TypeWhereUniqueInput_1 = require("../inputs/Product_TypeWhereUniqueInput");
let Product_TypeUpdateOneRequiredWithoutProductInput = class Product_TypeUpdateOneRequiredWithoutProductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeCreateWithoutProductInput_1.Product_TypeCreateWithoutProductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeCreateWithoutProductInput_1.Product_TypeCreateWithoutProductInput)
], Product_TypeUpdateOneRequiredWithoutProductInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeCreateOrConnectWithoutProductInput_1.Product_TypeCreateOrConnectWithoutProductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeCreateOrConnectWithoutProductInput_1.Product_TypeCreateOrConnectWithoutProductInput)
], Product_TypeUpdateOneRequiredWithoutProductInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeUpsertWithoutProductInput_1.Product_TypeUpsertWithoutProductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeUpsertWithoutProductInput_1.Product_TypeUpsertWithoutProductInput)
], Product_TypeUpdateOneRequiredWithoutProductInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeWhereUniqueInput_1.Product_TypeWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeWhereUniqueInput_1.Product_TypeWhereUniqueInput)
], Product_TypeUpdateOneRequiredWithoutProductInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeUpdateWithoutProductInput_1.Product_TypeUpdateWithoutProductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeUpdateWithoutProductInput_1.Product_TypeUpdateWithoutProductInput)
], Product_TypeUpdateOneRequiredWithoutProductInput.prototype, "update", void 0);
Product_TypeUpdateOneRequiredWithoutProductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Product_TypeUpdateOneRequiredWithoutProductInput", {
        isAbstract: true
    })
], Product_TypeUpdateOneRequiredWithoutProductInput);
exports.Product_TypeUpdateOneRequiredWithoutProductInput = Product_TypeUpdateOneRequiredWithoutProductInput;
