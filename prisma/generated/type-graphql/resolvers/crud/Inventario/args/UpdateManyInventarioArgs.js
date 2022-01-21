"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyInventarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioUpdateManyMutationInput_1 = require("../../../inputs/InventarioUpdateManyMutationInput");
const InventarioWhereInput_1 = require("../../../inputs/InventarioWhereInput");
let UpdateManyInventarioArgs = class UpdateManyInventarioArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioUpdateManyMutationInput_1.InventarioUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", InventarioUpdateManyMutationInput_1.InventarioUpdateManyMutationInput)
], UpdateManyInventarioArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioWhereInput_1.InventarioWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioWhereInput_1.InventarioWhereInput)
], UpdateManyInventarioArgs.prototype, "where", void 0);
UpdateManyInventarioArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyInventarioArgs);
exports.UpdateManyInventarioArgs = UpdateManyInventarioArgs;
