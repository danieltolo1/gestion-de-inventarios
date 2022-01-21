"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyMovimientoInventarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioCreateManyInput_1 = require("../../../inputs/MovimientoInventarioCreateManyInput");
let CreateManyMovimientoInventarioArgs = class CreateManyMovimientoInventarioArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioCreateManyInput_1.MovimientoInventarioCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyMovimientoInventarioArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyMovimientoInventarioArgs.prototype, "skipDuplicates", void 0);
CreateManyMovimientoInventarioArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyMovimientoInventarioArgs);
exports.CreateManyMovimientoInventarioArgs = CreateManyMovimientoInventarioArgs;
