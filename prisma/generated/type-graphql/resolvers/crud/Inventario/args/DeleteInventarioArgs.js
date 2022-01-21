"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteInventarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioWhereUniqueInput_1 = require("../../../inputs/InventarioWhereUniqueInput");
let DeleteInventarioArgs = class DeleteInventarioArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioWhereUniqueInput_1.InventarioWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", InventarioWhereUniqueInput_1.InventarioWhereUniqueInput)
], DeleteInventarioArgs.prototype, "where", void 0);
DeleteInventarioArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteInventarioArgs);
exports.DeleteInventarioArgs = DeleteInventarioArgs;
