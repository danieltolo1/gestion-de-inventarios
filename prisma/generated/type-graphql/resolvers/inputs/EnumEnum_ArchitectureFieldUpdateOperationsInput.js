"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_ArchitectureFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Enum_Architecture_1 = require("../../enums/Enum_Architecture");
let EnumEnum_ArchitectureFieldUpdateOperationsInput = class EnumEnum_ArchitectureFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Enum_Architecture_1.Enum_Architecture, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumEnum_ArchitectureFieldUpdateOperationsInput.prototype, "set", void 0);
EnumEnum_ArchitectureFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumEnum_ArchitectureFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumEnum_ArchitectureFieldUpdateOperationsInput);
exports.EnumEnum_ArchitectureFieldUpdateOperationsInput = EnumEnum_ArchitectureFieldUpdateOperationsInput;
