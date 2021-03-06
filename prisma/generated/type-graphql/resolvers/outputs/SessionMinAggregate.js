"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let SessionMinAggregate = class SessionMinAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SessionMinAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SessionMinAggregate.prototype, "sessionToken", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SessionMinAggregate.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], SessionMinAggregate.prototype, "expires", void 0);
SessionMinAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("SessionMinAggregate", {
        isAbstract: true
    })
], SessionMinAggregate);
exports.SessionMinAggregate = SessionMinAggregate;
