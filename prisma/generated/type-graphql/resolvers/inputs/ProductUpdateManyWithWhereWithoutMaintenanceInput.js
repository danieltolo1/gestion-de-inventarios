"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateManyWithWhereWithoutMaintenanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductScalarWhereInput_1 = require("../inputs/ProductScalarWhereInput");
const ProductUpdateManyMutationInput_1 = require("../inputs/ProductUpdateManyMutationInput");
let ProductUpdateManyWithWhereWithoutMaintenanceInput = class ProductUpdateManyWithWhereWithoutMaintenanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductScalarWhereInput_1.ProductScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductScalarWhereInput_1.ProductScalarWhereInput)
], ProductUpdateManyWithWhereWithoutMaintenanceInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductUpdateManyMutationInput_1.ProductUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductUpdateManyMutationInput_1.ProductUpdateManyMutationInput)
], ProductUpdateManyWithWhereWithoutMaintenanceInput.prototype, "data", void 0);
ProductUpdateManyWithWhereWithoutMaintenanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductUpdateManyWithWhereWithoutMaintenanceInput", {
        isAbstract: true
    })
], ProductUpdateManyWithWhereWithoutMaintenanceInput);
exports.ProductUpdateManyWithWhereWithoutMaintenanceInput = ProductUpdateManyWithWhereWithoutMaintenanceInput;
