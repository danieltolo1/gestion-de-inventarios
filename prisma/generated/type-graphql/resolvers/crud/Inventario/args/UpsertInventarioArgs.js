"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertInventarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioCreateInput_1 = require("../../../inputs/InventarioCreateInput");
const InventarioUpdateInput_1 = require("../../../inputs/InventarioUpdateInput");
const InventarioWhereUniqueInput_1 = require("../../../inputs/InventarioWhereUniqueInput");
let UpsertInventarioArgs = class UpsertInventarioArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioWhereUniqueInput_1.InventarioWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", InventarioWhereUniqueInput_1.InventarioWhereUniqueInput)
], UpsertInventarioArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioCreateInput_1.InventarioCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", InventarioCreateInput_1.InventarioCreateInput)
], UpsertInventarioArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioUpdateInput_1.InventarioUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", InventarioUpdateInput_1.InventarioUpdateInput)
], UpsertInventarioArgs.prototype, "update", void 0);
UpsertInventarioArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertInventarioArgs);
exports.UpsertInventarioArgs = UpsertInventarioArgs;
