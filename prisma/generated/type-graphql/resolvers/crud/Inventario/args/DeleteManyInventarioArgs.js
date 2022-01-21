"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyInventarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioWhereInput_1 = require("../../../inputs/InventarioWhereInput");
let DeleteManyInventarioArgs = class DeleteManyInventarioArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioWhereInput_1.InventarioWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioWhereInput_1.InventarioWhereInput)
], DeleteManyInventarioArgs.prototype, "where", void 0);
DeleteManyInventarioArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyInventarioArgs);
exports.DeleteManyInventarioArgs = DeleteManyInventarioArgs;
