"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerCreateManyLocationInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateManyLocationInput_1 = require("../inputs/PartComputerCreateManyLocationInput");
let PartComputerCreateManyLocationInputEnvelope = class PartComputerCreateManyLocationInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerCreateManyLocationInput_1.PartComputerCreateManyLocationInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerCreateManyLocationInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PartComputerCreateManyLocationInputEnvelope.prototype, "skipDuplicates", void 0);
PartComputerCreateManyLocationInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerCreateManyLocationInputEnvelope", {
        isAbstract: true
    })
], PartComputerCreateManyLocationInputEnvelope);
exports.PartComputerCreateManyLocationInputEnvelope = PartComputerCreateManyLocationInputEnvelope;
