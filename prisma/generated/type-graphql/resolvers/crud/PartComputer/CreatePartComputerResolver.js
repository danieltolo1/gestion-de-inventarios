"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePartComputerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const CreatePartComputerArgs_1 = require("./args/CreatePartComputerArgs");
const PartComputer_1 = require("../../../models/PartComputer");
const helpers_1 = require("../../../helpers");
let CreatePartComputerResolver = class CreatePartComputerResolver {
    async createPartComputer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).partComputer.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => PartComputer_1.PartComputer, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreatePartComputerArgs_1.CreatePartComputerArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CreatePartComputerResolver.prototype, "createPartComputer", null);
CreatePartComputerResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => PartComputer_1.PartComputer)
], CreatePartComputerResolver);
exports.CreatePartComputerResolver = CreatePartComputerResolver;
