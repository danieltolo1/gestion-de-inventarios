"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioCreateNestedManyWithoutInventarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioCreateManyInventarioInputEnvelope_1 = require("../inputs/MovimientoInventarioCreateManyInventarioInputEnvelope");
const MovimientoInventarioCreateOrConnectWithoutInventarioInput_1 = require("../inputs/MovimientoInventarioCreateOrConnectWithoutInventarioInput");
const MovimientoInventarioCreateWithoutInventarioInput_1 = require("../inputs/MovimientoInventarioCreateWithoutInventarioInput");
const MovimientoInventarioWhereUniqueInput_1 = require("../inputs/MovimientoInventarioWhereUniqueInput");
let MovimientoInventarioCreateNestedManyWithoutInventarioInput = class MovimientoInventarioCreateNestedManyWithoutInventarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioCreateWithoutInventarioInput_1.MovimientoInventarioCreateWithoutInventarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioCreateNestedManyWithoutInventarioInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioCreateOrConnectWithoutInventarioInput_1.MovimientoInventarioCreateOrConnectWithoutInventarioInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioCreateNestedManyWithoutInventarioInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioCreateManyInventarioInputEnvelope_1.MovimientoInventarioCreateManyInventarioInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioCreateManyInventarioInputEnvelope_1.MovimientoInventarioCreateManyInventarioInputEnvelope)
], MovimientoInventarioCreateNestedManyWithoutInventarioInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MovimientoInventarioWhereUniqueInput_1.MovimientoInventarioWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MovimientoInventarioCreateNestedManyWithoutInventarioInput.prototype, "connect", void 0);
MovimientoInventarioCreateNestedManyWithoutInventarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MovimientoInventarioCreateNestedManyWithoutInventarioInput", {
        isAbstract: true
    })
], MovimientoInventarioCreateNestedManyWithoutInventarioInput);
exports.MovimientoInventarioCreateNestedManyWithoutInventarioInput = MovimientoInventarioCreateNestedManyWithoutInventarioInput;
