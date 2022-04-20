"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerCreateManyComputerInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateManyComputerInput_1 = require("../inputs/PartComputerCreateManyComputerInput");
let PartComputerCreateManyComputerInputEnvelope = class PartComputerCreateManyComputerInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerCreateManyComputerInput_1.PartComputerCreateManyComputerInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerCreateManyComputerInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PartComputerCreateManyComputerInputEnvelope.prototype, "skipDuplicates", void 0);
PartComputerCreateManyComputerInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerCreateManyComputerInputEnvelope", {
        isAbstract: true
    })
], PartComputerCreateManyComputerInputEnvelope);
exports.PartComputerCreateManyComputerInputEnvelope = PartComputerCreateManyComputerInputEnvelope;
