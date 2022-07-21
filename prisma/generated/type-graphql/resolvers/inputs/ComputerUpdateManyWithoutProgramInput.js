"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerUpdateManyWithoutProgramInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateOrConnectWithoutProgramInput_1 = require("../inputs/ComputerCreateOrConnectWithoutProgramInput");
const ComputerCreateWithoutProgramInput_1 = require("../inputs/ComputerCreateWithoutProgramInput");
const ComputerScalarWhereInput_1 = require("../inputs/ComputerScalarWhereInput");
const ComputerUpdateManyWithWhereWithoutProgramInput_1 = require("../inputs/ComputerUpdateManyWithWhereWithoutProgramInput");
const ComputerUpdateWithWhereUniqueWithoutProgramInput_1 = require("../inputs/ComputerUpdateWithWhereUniqueWithoutProgramInput");
const ComputerUpsertWithWhereUniqueWithoutProgramInput_1 = require("../inputs/ComputerUpsertWithWhereUniqueWithoutProgramInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerUpdateManyWithoutProgramInput = class ComputerUpdateManyWithoutProgramInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerCreateWithoutProgramInput_1.ComputerCreateWithoutProgramInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutProgramInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerCreateOrConnectWithoutProgramInput_1.ComputerCreateOrConnectWithoutProgramInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutProgramInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerUpsertWithWhereUniqueWithoutProgramInput_1.ComputerUpsertWithWhereUniqueWithoutProgramInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutProgramInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerWhereUniqueInput_1.ComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutProgramInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerWhereUniqueInput_1.ComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutProgramInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerWhereUniqueInput_1.ComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutProgramInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerWhereUniqueInput_1.ComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutProgramInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerUpdateWithWhereUniqueWithoutProgramInput_1.ComputerUpdateWithWhereUniqueWithoutProgramInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutProgramInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerUpdateManyWithWhereWithoutProgramInput_1.ComputerUpdateManyWithWhereWithoutProgramInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutProgramInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerScalarWhereInput_1.ComputerScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerUpdateManyWithoutProgramInput.prototype, "deleteMany", void 0);
ComputerUpdateManyWithoutProgramInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerUpdateManyWithoutProgramInput", {
        isAbstract: true
    })
], ComputerUpdateManyWithoutProgramInput);
exports.ComputerUpdateManyWithoutProgramInput = ComputerUpdateManyWithoutProgramInput;
