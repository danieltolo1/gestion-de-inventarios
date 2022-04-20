"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerCreateManySoftwarecomputerInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateManySoftwarecomputerInput_1 = require("../inputs/ComputerCreateManySoftwarecomputerInput");
let ComputerCreateManySoftwarecomputerInputEnvelope = class ComputerCreateManySoftwarecomputerInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerCreateManySoftwarecomputerInput_1.ComputerCreateManySoftwarecomputerInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerCreateManySoftwarecomputerInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ComputerCreateManySoftwarecomputerInputEnvelope.prototype, "skipDuplicates", void 0);
ComputerCreateManySoftwarecomputerInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerCreateManySoftwarecomputerInputEnvelope", {
        isAbstract: true
    })
], ComputerCreateManySoftwarecomputerInputEnvelope);
exports.ComputerCreateManySoftwarecomputerInputEnvelope = ComputerCreateManySoftwarecomputerInputEnvelope;
