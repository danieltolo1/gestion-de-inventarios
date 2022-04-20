"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPartComputerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerWhereInput_1 = require("../../../inputs/PartComputerWhereInput");
let DeleteManyPartComputerArgs = class DeleteManyPartComputerArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerWhereInput_1.PartComputerWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerWhereInput_1.PartComputerWhereInput)
], DeleteManyPartComputerArgs.prototype, "where", void 0);
DeleteManyPartComputerArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyPartComputerArgs);
exports.DeleteManyPartComputerArgs = DeleteManyPartComputerArgs;
