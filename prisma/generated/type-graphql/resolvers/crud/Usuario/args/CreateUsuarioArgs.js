"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsuarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UsuarioCreateInput_1 = require("../../../inputs/UsuarioCreateInput");
let CreateUsuarioArgs = class CreateUsuarioArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UsuarioCreateInput_1.UsuarioCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UsuarioCreateInput_1.UsuarioCreateInput)
], CreateUsuarioArgs.prototype, "data", void 0);
CreateUsuarioArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateUsuarioArgs);
exports.CreateUsuarioArgs = CreateUsuarioArgs;
