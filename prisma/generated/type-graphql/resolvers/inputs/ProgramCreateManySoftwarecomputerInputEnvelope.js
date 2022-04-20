"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramCreateManySoftwarecomputerInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramCreateManySoftwarecomputerInput_1 = require("../inputs/ProgramCreateManySoftwarecomputerInput");
let ProgramCreateManySoftwarecomputerInputEnvelope = class ProgramCreateManySoftwarecomputerInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramCreateManySoftwarecomputerInput_1.ProgramCreateManySoftwarecomputerInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramCreateManySoftwarecomputerInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ProgramCreateManySoftwarecomputerInputEnvelope.prototype, "skipDuplicates", void 0);
ProgramCreateManySoftwarecomputerInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramCreateManySoftwarecomputerInputEnvelope", {
        isAbstract: true
    })
], ProgramCreateManySoftwarecomputerInputEnvelope);
exports.ProgramCreateManySoftwarecomputerInputEnvelope = ProgramCreateManySoftwarecomputerInputEnvelope;
