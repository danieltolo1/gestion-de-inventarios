"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProduct_TypeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Product_TypeCreateManyInput_1 = require("../../../inputs/Product_TypeCreateManyInput");
let CreateManyProduct_TypeArgs = class CreateManyProduct_TypeArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Product_TypeCreateManyInput_1.Product_TypeCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyProduct_TypeArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyProduct_TypeArgs.prototype, "skipDuplicates", void 0);
CreateManyProduct_TypeArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyProduct_TypeArgs);
exports.CreateManyProduct_TypeArgs = CreateManyProduct_TypeArgs;
