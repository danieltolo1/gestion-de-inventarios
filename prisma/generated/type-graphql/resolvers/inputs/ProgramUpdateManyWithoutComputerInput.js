"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramUpdateManyWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProgramCreateOrConnectWithoutComputerInput_1 = require("../inputs/ProgramCreateOrConnectWithoutComputerInput");
const ProgramCreateWithoutComputerInput_1 = require("../inputs/ProgramCreateWithoutComputerInput");
const ProgramScalarWhereInput_1 = require("../inputs/ProgramScalarWhereInput");
const ProgramUpdateManyWithWhereWithoutComputerInput_1 = require("../inputs/ProgramUpdateManyWithWhereWithoutComputerInput");
const ProgramUpdateWithWhereUniqueWithoutComputerInput_1 = require("../inputs/ProgramUpdateWithWhereUniqueWithoutComputerInput");
const ProgramUpsertWithWhereUniqueWithoutComputerInput_1 = require("../inputs/ProgramUpsertWithWhereUniqueWithoutComputerInput");
const ProgramWhereUniqueInput_1 = require("../inputs/ProgramWhereUniqueInput");
let ProgramUpdateManyWithoutComputerInput = class ProgramUpdateManyWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramCreateWithoutComputerInput_1.ProgramCreateWithoutComputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramUpdateManyWithoutComputerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramCreateOrConnectWithoutComputerInput_1.ProgramCreateOrConnectWithoutComputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramUpdateManyWithoutComputerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramUpsertWithWhereUniqueWithoutComputerInput_1.ProgramUpsertWithWhereUniqueWithoutComputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramUpdateManyWithoutComputerInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramWhereUniqueInput_1.ProgramWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramUpdateManyWithoutComputerInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramWhereUniqueInput_1.ProgramWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramUpdateManyWithoutComputerInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramWhereUniqueInput_1.ProgramWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramUpdateManyWithoutComputerInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramWhereUniqueInput_1.ProgramWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramUpdateManyWithoutComputerInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramUpdateWithWhereUniqueWithoutComputerInput_1.ProgramUpdateWithWhereUniqueWithoutComputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramUpdateManyWithoutComputerInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramUpdateManyWithWhereWithoutComputerInput_1.ProgramUpdateManyWithWhereWithoutComputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramUpdateManyWithoutComputerInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProgramScalarWhereInput_1.ProgramScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProgramUpdateManyWithoutComputerInput.prototype, "deleteMany", void 0);
ProgramUpdateManyWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProgramUpdateManyWithoutComputerInput", {
        isAbstract: true
    })
], ProgramUpdateManyWithoutComputerInput);
exports.ProgramUpdateManyWithoutComputerInput = ProgramUpdateManyWithoutComputerInput;
