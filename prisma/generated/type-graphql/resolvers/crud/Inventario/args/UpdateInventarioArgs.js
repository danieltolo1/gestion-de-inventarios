"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInventarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioUpdateInput_1 = require("../../../inputs/InventarioUpdateInput");
const InventarioWhereUniqueInput_1 = require("../../../inputs/InventarioWhereUniqueInput");
let UpdateInventarioArgs = class UpdateInventarioArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioUpdateInput_1.InventarioUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", InventarioUpdateInput_1.InventarioUpdateInput)
], UpdateInventarioArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioWhereUniqueInput_1.InventarioWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", InventarioWhereUniqueInput_1.InventarioWhereUniqueInput)
], UpdateInventarioArgs.prototype, "where", void 0);
UpdateInventarioArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateInventarioArgs);
exports.UpdateInventarioArgs = UpdateInventarioArgs;
