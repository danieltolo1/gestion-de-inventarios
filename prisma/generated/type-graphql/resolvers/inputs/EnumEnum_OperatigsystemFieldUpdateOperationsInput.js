"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_OperatigsystemFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Enum_Operatigsystem_1 = require("../../enums/Enum_Operatigsystem");
let EnumEnum_OperatigsystemFieldUpdateOperationsInput = class EnumEnum_OperatigsystemFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_Operatigsystem_1.Enum_Operatigsystem, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumEnum_OperatigsystemFieldUpdateOperationsInput.prototype, "set", void 0);
EnumEnum_OperatigsystemFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumEnum_OperatigsystemFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumEnum_OperatigsystemFieldUpdateOperationsInput);
exports.EnumEnum_OperatigsystemFieldUpdateOperationsInput = EnumEnum_OperatigsystemFieldUpdateOperationsInput;
