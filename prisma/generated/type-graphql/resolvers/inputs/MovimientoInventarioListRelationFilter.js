"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioWhereInput_1 = require("../inputs/MovimientoInventarioWhereInput");
let MovimientoInventarioListRelationFilter = class MovimientoInventarioListRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioWhereInput_1.MovimientoInventarioWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioWhereInput_1.MovimientoInventarioWhereInput)
], MovimientoInventarioListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioWhereInput_1.MovimientoInventarioWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioWhereInput_1.MovimientoInventarioWhereInput)
], MovimientoInventarioListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioWhereInput_1.MovimientoInventarioWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioWhereInput_1.MovimientoInventarioWhereInput)
], MovimientoInventarioListRelationFilter.prototype, "none", void 0);
MovimientoInventarioListRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioListRelationFilter", {
        isAbstract: true
    })
], MovimientoInventarioListRelationFilter);
exports.MovimientoInventarioListRelationFilter = MovimientoInventarioListRelationFilter;
