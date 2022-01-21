"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInventarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioCreateInput_1 = require("../../../inputs/InventarioCreateInput");
let CreateInventarioArgs = class CreateInventarioArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioCreateInput_1.InventarioCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", InventarioCreateInput_1.InventarioCreateInput)
], CreateInventarioArgs.prototype, "data", void 0);
CreateInventarioArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateInventarioArgs);
exports.CreateInventarioArgs = CreateInventarioArgs;
