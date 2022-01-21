"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let InventarioCreateManyInput = class InventarioCreateManyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioCreateManyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InventarioCreateManyInput.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioCreateManyInput.prototype, "productoId", void 0);
InventarioCreateManyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InventarioCreateManyInput", {
        isAbstract: true
    })
], InventarioCreateManyInput);
exports.InventarioCreateManyInput = InventarioCreateManyInput;
