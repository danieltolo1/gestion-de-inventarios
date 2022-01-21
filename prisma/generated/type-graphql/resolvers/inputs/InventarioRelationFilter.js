"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioWhereInput_1 = require("../inputs/InventarioWhereInput");
let InventarioRelationFilter = class InventarioRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioWhereInput_1.InventarioWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioWhereInput_1.InventarioWhereInput)
], InventarioRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioWhereInput_1.InventarioWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioWhereInput_1.InventarioWhereInput)
], InventarioRelationFilter.prototype, "isNot", void 0);
InventarioRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InventarioRelationFilter", {
        isAbstract: true
    })
], InventarioRelationFilter);
exports.InventarioRelationFilter = InventarioRelationFilter;
