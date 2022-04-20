"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProduct_TypeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Product_TypeCreateInput_1 = require("../../../inputs/Product_TypeCreateInput");
let CreateProduct_TypeArgs = class CreateProduct_TypeArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeCreateInput_1.Product_TypeCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeCreateInput_1.Product_TypeCreateInput)
], CreateProduct_TypeArgs.prototype, "data", void 0);
CreateProduct_TypeArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateProduct_TypeArgs);
exports.CreateProduct_TypeArgs = CreateProduct_TypeArgs;
