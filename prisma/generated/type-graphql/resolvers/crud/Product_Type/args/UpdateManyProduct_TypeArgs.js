"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyProduct_TypeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Product_TypeUpdateManyMutationInput_1 = require("../../../inputs/Product_TypeUpdateManyMutationInput");
const Product_TypeWhereInput_1 = require("../../../inputs/Product_TypeWhereInput");
let UpdateManyProduct_TypeArgs = class UpdateManyProduct_TypeArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeUpdateManyMutationInput_1.Product_TypeUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeUpdateManyMutationInput_1.Product_TypeUpdateManyMutationInput)
], UpdateManyProduct_TypeArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeWhereInput_1.Product_TypeWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeWhereInput_1.Product_TypeWhereInput)
], UpdateManyProduct_TypeArgs.prototype, "where", void 0);
UpdateManyProduct_TypeArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyProduct_TypeArgs);
exports.UpdateManyProduct_TypeArgs = UpdateManyProduct_TypeArgs;
