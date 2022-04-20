"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerCreateManyStateInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateManyStateInput_1 = require("../inputs/ComputerCreateManyStateInput");
let ComputerCreateManyStateInputEnvelope = class ComputerCreateManyStateInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerCreateManyStateInput_1.ComputerCreateManyStateInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerCreateManyStateInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ComputerCreateManyStateInputEnvelope.prototype, "skipDuplicates", void 0);
ComputerCreateManyStateInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerCreateManyStateInputEnvelope", {
        isAbstract: true
    })
], ComputerCreateManyStateInputEnvelope);
exports.ComputerCreateManyStateInputEnvelope = ComputerCreateManyStateInputEnvelope;
