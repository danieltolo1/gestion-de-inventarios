"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerCreateManyLocationInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateManyLocationInput_1 = require("../inputs/ComputerCreateManyLocationInput");
let ComputerCreateManyLocationInputEnvelope = class ComputerCreateManyLocationInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerCreateManyLocationInput_1.ComputerCreateManyLocationInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerCreateManyLocationInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ComputerCreateManyLocationInputEnvelope.prototype, "skipDuplicates", void 0);
ComputerCreateManyLocationInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerCreateManyLocationInputEnvelope", {
        isAbstract: true
    })
], ComputerCreateManyLocationInputEnvelope);
exports.ComputerCreateManyLocationInputEnvelope = ComputerCreateManyLocationInputEnvelope;
