"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPartComputerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const CreateManyPartComputerArgs_1 = require("./args/CreateManyPartComputerArgs");
const PartComputer_1 = require("../../../models/PartComputer");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyPartComputerResolver = class CreateManyPartComputerResolver {
    async createManyPartComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).partComputer.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyPartComputerArgs_1.CreateManyPartComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CreateManyPartComputerResolver.prototype, "createManyPartComputer", null);
CreateManyPartComputerResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => PartComputer_1.PartComputer)
], CreateManyPartComputerResolver);
exports.CreateManyPartComputerResolver = CreateManyPartComputerResolver;
