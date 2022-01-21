"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyInventarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioCreateManyInput_1 = require("../../../inputs/InventarioCreateManyInput");
let CreateManyInventarioArgs = class CreateManyInventarioArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [InventarioCreateManyInput_1.InventarioCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyInventarioArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyInventarioArgs.prototype, "skipDuplicates", void 0);
CreateManyInventarioArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyInventarioArgs);
exports.CreateManyInventarioArgs = CreateManyInventarioArgs;
