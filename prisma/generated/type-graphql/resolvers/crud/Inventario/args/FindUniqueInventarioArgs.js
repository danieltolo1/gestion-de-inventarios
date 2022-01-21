"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueInventarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioWhereUniqueInput_1 = require("../../../inputs/InventarioWhereUniqueInput");
let FindUniqueInventarioArgs = class FindUniqueInventarioArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioWhereUniqueInput_1.InventarioWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", InventarioWhereUniqueInput_1.InventarioWhereUniqueInput)
], FindUniqueInventarioArgs.prototype, "where", void 0);
FindUniqueInventarioArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueInventarioArgs);
exports.FindUniqueInventarioArgs = FindUniqueInventarioArgs;
