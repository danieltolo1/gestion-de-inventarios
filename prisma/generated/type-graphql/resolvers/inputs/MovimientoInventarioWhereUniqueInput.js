"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let MovimientoInventarioWhereUniqueInput = class MovimientoInventarioWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MovimientoInventarioWhereUniqueInput.prototype, "id", void 0);
MovimientoInventarioWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioWhereUniqueInput", {
        isAbstract: true
    })
], MovimientoInventarioWhereUniqueInput);
exports.MovimientoInventarioWhereUniqueInput = MovimientoInventarioWhereUniqueInput;
