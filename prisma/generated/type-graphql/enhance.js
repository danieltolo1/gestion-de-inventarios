"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = (0, tslib_1.__importStar)(require("tslib"));
const crudResolvers = (0, tslib_1.__importStar)(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = (0, tslib_1.__importStar)(require("./resolvers/crud/args.index"));
const actionResolvers = (0, tslib_1.__importStar)(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = (0, tslib_1.__importStar)(require("./resolvers/relations/resolvers.index"));
const models = (0, tslib_1.__importStar)(require("./models"));
const outputTypes = (0, tslib_1.__importStar)(require("./resolvers/outputs"));
const inputTypes = (0, tslib_1.__importStar)(require("./resolvers/inputs"));
const crudResolversMap = {
    Producto: crudResolvers.ProductoCrudResolver,
    Inventario: crudResolvers.InventarioCrudResolver,
    MovimientoInventario: crudResolvers.MovimientoInventarioCrudResolver,
    Account: crudResolvers.AccountCrudResolver,
    Session: crudResolvers.SessionCrudResolver,
    VerificationToken: crudResolvers.VerificationTokenCrudResolver,
    User: crudResolvers.UserCrudResolver
};
const actionResolversMap = {
    Producto: {
        producto: actionResolvers.FindUniqueProductoResolver,
        findFirstProducto: actionResolvers.FindFirstProductoResolver,
        productos: actionResolvers.FindManyProductoResolver,
        createProducto: actionResolvers.CreateProductoResolver,
        createManyProducto: actionResolvers.CreateManyProductoResolver,
        deleteProducto: actionResolvers.DeleteProductoResolver,
        updateProducto: actionResolvers.UpdateProductoResolver,
        deleteManyProducto: actionResolvers.DeleteManyProductoResolver,
        updateManyProducto: actionResolvers.UpdateManyProductoResolver,
        upsertProducto: actionResolvers.UpsertProductoResolver,
        aggregateProducto: actionResolvers.AggregateProductoResolver,
        groupByProducto: actionResolvers.GroupByProductoResolver
    },
    Inventario: {
        inventario: actionResolvers.FindUniqueInventarioResolver,
        findFirstInventario: actionResolvers.FindFirstInventarioResolver,
        inventarios: actionResolvers.FindManyInventarioResolver,
        createInventario: actionResolvers.CreateInventarioResolver,
        createManyInventario: actionResolvers.CreateManyInventarioResolver,
        deleteInventario: actionResolvers.DeleteInventarioResolver,
        updateInventario: actionResolvers.UpdateInventarioResolver,
        deleteManyInventario: actionResolvers.DeleteManyInventarioResolver,
        updateManyInventario: actionResolvers.UpdateManyInventarioResolver,
        upsertInventario: actionResolvers.UpsertInventarioResolver,
        aggregateInventario: actionResolvers.AggregateInventarioResolver,
        groupByInventario: actionResolvers.GroupByInventarioResolver
    },
    MovimientoInventario: {
        movimientoInventario: actionResolvers.FindUniqueMovimientoInventarioResolver,
        findFirstMovimientoInventario: actionResolvers.FindFirstMovimientoInventarioResolver,
        movimientoInventarios: actionResolvers.FindManyMovimientoInventarioResolver,
        createMovimientoInventario: actionResolvers.CreateMovimientoInventarioResolver,
        createManyMovimientoInventario: actionResolvers.CreateManyMovimientoInventarioResolver,
        deleteMovimientoInventario: actionResolvers.DeleteMovimientoInventarioResolver,
        updateMovimientoInventario: actionResolvers.UpdateMovimientoInventarioResolver,
        deleteManyMovimientoInventario: actionResolvers.DeleteManyMovimientoInventarioResolver,
        updateManyMovimientoInventario: actionResolvers.UpdateManyMovimientoInventarioResolver,
        upsertMovimientoInventario: actionResolvers.UpsertMovimientoInventarioResolver,
        aggregateMovimientoInventario: actionResolvers.AggregateMovimientoInventarioResolver,
        groupByMovimientoInventario: actionResolvers.GroupByMovimientoInventarioResolver
    },
    Account: {
        account: actionResolvers.FindUniqueAccountResolver,
        findFirstAccount: actionResolvers.FindFirstAccountResolver,
        accounts: actionResolvers.FindManyAccountResolver,
        createAccount: actionResolvers.CreateAccountResolver,
        createManyAccount: actionResolvers.CreateManyAccountResolver,
        deleteAccount: actionResolvers.DeleteAccountResolver,
        updateAccount: actionResolvers.UpdateAccountResolver,
        deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
        updateManyAccount: actionResolvers.UpdateManyAccountResolver,
        upsertAccount: actionResolvers.UpsertAccountResolver,
        aggregateAccount: actionResolvers.AggregateAccountResolver,
        groupByAccount: actionResolvers.GroupByAccountResolver
    },
    Session: {
        session: actionResolvers.FindUniqueSessionResolver,
        findFirstSession: actionResolvers.FindFirstSessionResolver,
        sessions: actionResolvers.FindManySessionResolver,
        createSession: actionResolvers.CreateSessionResolver,
        createManySession: actionResolvers.CreateManySessionResolver,
        deleteSession: actionResolvers.DeleteSessionResolver,
        updateSession: actionResolvers.UpdateSessionResolver,
        deleteManySession: actionResolvers.DeleteManySessionResolver,
        updateManySession: actionResolvers.UpdateManySessionResolver,
        upsertSession: actionResolvers.UpsertSessionResolver,
        aggregateSession: actionResolvers.AggregateSessionResolver,
        groupBySession: actionResolvers.GroupBySessionResolver
    },
    VerificationToken: {
        verificationToken: actionResolvers.FindUniqueVerificationTokenResolver,
        findFirstVerificationToken: actionResolvers.FindFirstVerificationTokenResolver,
        verificationTokens: actionResolvers.FindManyVerificationTokenResolver,
        createVerificationToken: actionResolvers.CreateVerificationTokenResolver,
        createManyVerificationToken: actionResolvers.CreateManyVerificationTokenResolver,
        deleteVerificationToken: actionResolvers.DeleteVerificationTokenResolver,
        updateVerificationToken: actionResolvers.UpdateVerificationTokenResolver,
        deleteManyVerificationToken: actionResolvers.DeleteManyVerificationTokenResolver,
        updateManyVerificationToken: actionResolvers.UpdateManyVerificationTokenResolver,
        upsertVerificationToken: actionResolvers.UpsertVerificationTokenResolver,
        aggregateVerificationToken: actionResolvers.AggregateVerificationTokenResolver,
        groupByVerificationToken: actionResolvers.GroupByVerificationTokenResolver
    },
    User: {
        user: actionResolvers.FindUniqueUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        createUser: actionResolvers.CreateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        deleteUser: actionResolvers.DeleteUserResolver,
        updateUser: actionResolvers.UpdateUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        upsertUser: actionResolvers.UpsertUserResolver,
        aggregateUser: actionResolvers.AggregateUserResolver,
        groupByUser: actionResolvers.GroupByUserResolver
    }
};
const crudResolversInfo = {
    Producto: ["producto", "findFirstProducto", "productos", "createProducto", "createManyProducto", "deleteProducto", "updateProducto", "deleteManyProducto", "updateManyProducto", "upsertProducto", "aggregateProducto", "groupByProducto"],
    Inventario: ["inventario", "findFirstInventario", "inventarios", "createInventario", "createManyInventario", "deleteInventario", "updateInventario", "deleteManyInventario", "updateManyInventario", "upsertInventario", "aggregateInventario", "groupByInventario"],
    MovimientoInventario: ["movimientoInventario", "findFirstMovimientoInventario", "movimientoInventarios", "createMovimientoInventario", "createManyMovimientoInventario", "deleteMovimientoInventario", "updateMovimientoInventario", "deleteManyMovimientoInventario", "updateManyMovimientoInventario", "upsertMovimientoInventario", "aggregateMovimientoInventario", "groupByMovimientoInventario"],
    Account: ["account", "findFirstAccount", "accounts", "createAccount", "createManyAccount", "deleteAccount", "updateAccount", "deleteManyAccount", "updateManyAccount", "upsertAccount", "aggregateAccount", "groupByAccount"],
    Session: ["session", "findFirstSession", "sessions", "createSession", "createManySession", "deleteSession", "updateSession", "deleteManySession", "updateManySession", "upsertSession", "aggregateSession", "groupBySession"],
    VerificationToken: ["verificationToken", "findFirstVerificationToken", "verificationTokens", "createVerificationToken", "createManyVerificationToken", "deleteVerificationToken", "updateVerificationToken", "deleteManyVerificationToken", "updateManyVerificationToken", "upsertVerificationToken", "aggregateVerificationToken", "groupByVerificationToken"],
    User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"]
};
const argsInfo = {
    FindUniqueProductoArgs: ["where"],
    FindFirstProductoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyProductoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateProductoArgs: ["data"],
    CreateManyProductoArgs: ["data", "skipDuplicates"],
    DeleteProductoArgs: ["where"],
    UpdateProductoArgs: ["data", "where"],
    DeleteManyProductoArgs: ["where"],
    UpdateManyProductoArgs: ["data", "where"],
    UpsertProductoArgs: ["where", "create", "update"],
    AggregateProductoArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByProductoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueInventarioArgs: ["where"],
    FindFirstInventarioArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyInventarioArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateInventarioArgs: ["data"],
    CreateManyInventarioArgs: ["data", "skipDuplicates"],
    DeleteInventarioArgs: ["where"],
    UpdateInventarioArgs: ["data", "where"],
    DeleteManyInventarioArgs: ["where"],
    UpdateManyInventarioArgs: ["data", "where"],
    UpsertInventarioArgs: ["where", "create", "update"],
    AggregateInventarioArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByInventarioArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueMovimientoInventarioArgs: ["where"],
    FindFirstMovimientoInventarioArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyMovimientoInventarioArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateMovimientoInventarioArgs: ["data"],
    CreateManyMovimientoInventarioArgs: ["data", "skipDuplicates"],
    DeleteMovimientoInventarioArgs: ["where"],
    UpdateMovimientoInventarioArgs: ["data", "where"],
    DeleteManyMovimientoInventarioArgs: ["where"],
    UpdateManyMovimientoInventarioArgs: ["data", "where"],
    UpsertMovimientoInventarioArgs: ["where", "create", "update"],
    AggregateMovimientoInventarioArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByMovimientoInventarioArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueAccountArgs: ["where"],
    FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateAccountArgs: ["data"],
    CreateManyAccountArgs: ["data", "skipDuplicates"],
    DeleteAccountArgs: ["where"],
    UpdateAccountArgs: ["data", "where"],
    DeleteManyAccountArgs: ["where"],
    UpdateManyAccountArgs: ["data", "where"],
    UpsertAccountArgs: ["where", "create", "update"],
    AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueSessionArgs: ["where"],
    FindFirstSessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManySessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateSessionArgs: ["data"],
    CreateManySessionArgs: ["data", "skipDuplicates"],
    DeleteSessionArgs: ["where"],
    UpdateSessionArgs: ["data", "where"],
    DeleteManySessionArgs: ["where"],
    UpdateManySessionArgs: ["data", "where"],
    UpsertSessionArgs: ["where", "create", "update"],
    AggregateSessionArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupBySessionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueVerificationTokenArgs: ["where"],
    FindFirstVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateVerificationTokenArgs: ["data"],
    CreateManyVerificationTokenArgs: ["data", "skipDuplicates"],
    DeleteVerificationTokenArgs: ["where"],
    UpdateVerificationTokenArgs: ["data", "where"],
    DeleteManyVerificationTokenArgs: ["where"],
    UpdateManyVerificationTokenArgs: ["data", "where"],
    UpsertVerificationTokenArgs: ["where", "create", "update"],
    AggregateVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByVerificationTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateUserArgs: ["data"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    DeleteUserArgs: ["where"],
    UpdateUserArgs: ["data", "where"],
    DeleteManyUserArgs: ["where"],
    UpdateManyUserArgs: ["data", "where"],
    UpsertUserArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Producto: relationResolvers.ProductoRelationsResolver,
    Inventario: relationResolvers.InventarioRelationsResolver,
    MovimientoInventario: relationResolvers.MovimientoInventarioRelationsResolver,
    Account: relationResolvers.AccountRelationsResolver,
    Session: relationResolvers.SessionRelationsResolver,
    User: relationResolvers.UserRelationsResolver
};
const relationResolversInfo = {
    Producto: ["inventario"],
    Inventario: ["producto", "movimientoInventario"],
    MovimientoInventario: ["inventario", "usuario"],
    Account: ["user"],
    Session: ["user"],
    User: ["accounts", "sessions", "movimientos"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Producto: ["id", "nombre", "foto"],
    Inventario: ["id", "cantidad", "productoId"],
    MovimientoInventario: ["id", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuarioId"],
    Account: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    Session: ["id", "sessionToken", "userId", "expires"],
    VerificationToken: ["identifier", "token", "expires"],
    User: ["id", "name", "email", "emailVerified", "image"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateProducto: ["_count", "_min", "_max"],
    ProductoGroupBy: ["id", "nombre", "foto", "_count", "_min", "_max"],
    AggregateInventario: ["_count", "_avg", "_sum", "_min", "_max"],
    InventarioGroupBy: ["id", "cantidad", "productoId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateMovimientoInventario: ["_count", "_avg", "_sum", "_min", "_max"],
    MovimientoInventarioGroupBy: ["id", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuarioId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateAccount: ["_count", "_avg", "_sum", "_min", "_max"],
    AccountGroupBy: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateSession: ["_count", "_min", "_max"],
    SessionGroupBy: ["id", "sessionToken", "userId", "expires", "_count", "_min", "_max"],
    AggregateVerificationToken: ["_count", "_min", "_max"],
    VerificationTokenGroupBy: ["identifier", "token", "expires", "_count", "_min", "_max"],
    AggregateUser: ["_count", "_min", "_max"],
    UserGroupBy: ["id", "name", "email", "emailVerified", "image", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    ProductoCountAggregate: ["id", "nombre", "foto", "_all"],
    ProductoMinAggregate: ["id", "nombre", "foto"],
    ProductoMaxAggregate: ["id", "nombre", "foto"],
    InventarioCount: ["movimientoInventario"],
    InventarioCountAggregate: ["id", "cantidad", "productoId", "_all"],
    InventarioAvgAggregate: ["cantidad"],
    InventarioSumAggregate: ["cantidad"],
    InventarioMinAggregate: ["id", "cantidad", "productoId"],
    InventarioMaxAggregate: ["id", "cantidad", "productoId"],
    MovimientoInventarioCountAggregate: ["id", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuarioId", "_all"],
    MovimientoInventarioAvgAggregate: ["cantidad"],
    MovimientoInventarioSumAggregate: ["cantidad"],
    MovimientoInventarioMinAggregate: ["id", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuarioId"],
    MovimientoInventarioMaxAggregate: ["id", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuarioId"],
    AccountCountAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token", "_all"],
    AccountAvgAggregate: ["expires_at"],
    AccountSumAggregate: ["expires_at"],
    AccountMinAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    AccountMaxAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    SessionCountAggregate: ["id", "sessionToken", "userId", "expires", "_all"],
    SessionMinAggregate: ["id", "sessionToken", "userId", "expires"],
    SessionMaxAggregate: ["id", "sessionToken", "userId", "expires"],
    VerificationTokenCountAggregate: ["identifier", "token", "expires", "_all"],
    VerificationTokenMinAggregate: ["identifier", "token", "expires"],
    VerificationTokenMaxAggregate: ["identifier", "token", "expires"],
    UserCount: ["accounts", "sessions", "movimientos"],
    UserCountAggregate: ["id", "name", "email", "emailVerified", "image", "_all"],
    UserMinAggregate: ["id", "name", "email", "emailVerified", "image"],
    UserMaxAggregate: ["id", "name", "email", "emailVerified", "image"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    ProductoWhereInput: ["AND", "OR", "NOT", "id", "nombre", "foto", "inventario"],
    ProductoOrderByWithRelationInput: ["id", "nombre", "foto", "inventario"],
    ProductoWhereUniqueInput: ["id"],
    ProductoOrderByWithAggregationInput: ["id", "nombre", "foto", "_count", "_max", "_min"],
    ProductoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "nombre", "foto"],
    InventarioWhereInput: ["AND", "OR", "NOT", "id", "cantidad", "producto", "productoId", "movimientoInventario"],
    InventarioOrderByWithRelationInput: ["id", "cantidad", "producto", "productoId", "movimientoInventario"],
    InventarioWhereUniqueInput: ["id", "productoId"],
    InventarioOrderByWithAggregationInput: ["id", "cantidad", "productoId", "_count", "_avg", "_max", "_min", "_sum"],
    InventarioScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "cantidad", "productoId"],
    MovimientoInventarioWhereInput: ["AND", "OR", "NOT", "id", "inventario", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuario", "usuarioId"],
    MovimientoInventarioOrderByWithRelationInput: ["id", "inventario", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuario", "usuarioId"],
    MovimientoInventarioWhereUniqueInput: ["id"],
    MovimientoInventarioOrderByWithAggregationInput: ["id", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuarioId", "_count", "_avg", "_max", "_min", "_sum"],
    MovimientoInventarioScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuarioId"],
    AccountWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token", "user"],
    AccountOrderByWithRelationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token", "user"],
    AccountWhereUniqueInput: ["id", "provider_providerAccountId"],
    AccountOrderByWithAggregationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token", "_count", "_avg", "_max", "_min", "_sum"],
    AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    SessionWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires", "user"],
    SessionOrderByWithRelationInput: ["id", "sessionToken", "userId", "expires", "user"],
    SessionWhereUniqueInput: ["id", "sessionToken"],
    SessionOrderByWithAggregationInput: ["id", "sessionToken", "userId", "expires", "_count", "_max", "_min"],
    SessionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
    VerificationTokenWhereInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
    VerificationTokenOrderByWithRelationInput: ["identifier", "token", "expires"],
    VerificationTokenWhereUniqueInput: ["token", "identifier_token"],
    VerificationTokenOrderByWithAggregationInput: ["identifier", "token", "expires", "_count", "_max", "_min"],
    VerificationTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
    UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "accounts", "sessions", "movimientos"],
    UserOrderByWithRelationInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions", "movimientos"],
    UserWhereUniqueInput: ["id", "email"],
    UserOrderByWithAggregationInput: ["id", "name", "email", "emailVerified", "image", "_count", "_max", "_min"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image"],
    ProductoCreateInput: ["id", "nombre", "foto", "inventario"],
    ProductoUpdateInput: ["id", "nombre", "foto", "inventario"],
    ProductoCreateManyInput: ["id", "nombre", "foto"],
    ProductoUpdateManyMutationInput: ["id", "nombre", "foto"],
    InventarioCreateInput: ["id", "cantidad", "producto", "movimientoInventario"],
    InventarioUpdateInput: ["id", "cantidad", "producto", "movimientoInventario"],
    InventarioCreateManyInput: ["id", "cantidad", "productoId"],
    InventarioUpdateManyMutationInput: ["id", "cantidad"],
    MovimientoInventarioCreateInput: ["id", "cantidad", "tipoMovimiento", "fecha", "inventario", "usuario"],
    MovimientoInventarioUpdateInput: ["id", "cantidad", "tipoMovimiento", "fecha", "inventario", "usuario"],
    MovimientoInventarioCreateManyInput: ["id", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuarioId"],
    MovimientoInventarioUpdateManyMutationInput: ["id", "cantidad", "tipoMovimiento", "fecha"],
    AccountCreateInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token", "user"],
    AccountUpdateInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token", "user"],
    AccountCreateManyInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    AccountUpdateManyMutationInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    SessionCreateInput: ["id", "sessionToken", "expires", "user"],
    SessionUpdateInput: ["id", "sessionToken", "expires", "user"],
    SessionCreateManyInput: ["id", "sessionToken", "userId", "expires"],
    SessionUpdateManyMutationInput: ["id", "sessionToken", "expires"],
    VerificationTokenCreateInput: ["identifier", "token", "expires"],
    VerificationTokenUpdateInput: ["identifier", "token", "expires"],
    VerificationTokenCreateManyInput: ["identifier", "token", "expires"],
    VerificationTokenUpdateManyMutationInput: ["identifier", "token", "expires"],
    UserCreateInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions", "movimientos"],
    UserUpdateInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions", "movimientos"],
    UserCreateManyInput: ["id", "name", "email", "emailVerified", "image"],
    UserUpdateManyMutationInput: ["id", "name", "email", "emailVerified", "image"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    InventarioRelationFilter: ["is", "isNot"],
    ProductoCountOrderByAggregateInput: ["id", "nombre", "foto"],
    ProductoMaxOrderByAggregateInput: ["id", "nombre", "foto"],
    ProductoMinOrderByAggregateInput: ["id", "nombre", "foto"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    ProductoRelationFilter: ["is", "isNot"],
    MovimientoInventarioListRelationFilter: ["every", "some", "none"],
    MovimientoInventarioOrderByRelationAggregateInput: ["_count"],
    InventarioCountOrderByAggregateInput: ["id", "cantidad", "productoId"],
    InventarioAvgOrderByAggregateInput: ["cantidad"],
    InventarioMaxOrderByAggregateInput: ["id", "cantidad", "productoId"],
    InventarioMinOrderByAggregateInput: ["id", "cantidad", "productoId"],
    InventarioSumOrderByAggregateInput: ["cantidad"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    EnumEnum_TipoMovimientoFilter: ["equals", "in", "notIn", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    UserRelationFilter: ["is", "isNot"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    MovimientoInventarioCountOrderByAggregateInput: ["id", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuarioId"],
    MovimientoInventarioAvgOrderByAggregateInput: ["cantidad"],
    MovimientoInventarioMaxOrderByAggregateInput: ["id", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuarioId"],
    MovimientoInventarioMinOrderByAggregateInput: ["id", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuarioId"],
    MovimientoInventarioSumOrderByAggregateInput: ["cantidad"],
    EnumEnum_TipoMovimientoWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    AccountProviderProviderAccountIdCompoundUniqueInput: ["provider", "providerAccountId"],
    AccountCountOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    AccountAvgOrderByAggregateInput: ["expires_at"],
    AccountMaxOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    AccountMinOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    AccountSumOrderByAggregateInput: ["expires_at"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    SessionCountOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
    SessionMaxOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
    SessionMinOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
    VerificationTokenIdentifierTokenCompoundUniqueInput: ["identifier", "token"],
    VerificationTokenCountOrderByAggregateInput: ["identifier", "token", "expires"],
    VerificationTokenMaxOrderByAggregateInput: ["identifier", "token", "expires"],
    VerificationTokenMinOrderByAggregateInput: ["identifier", "token", "expires"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    AccountListRelationFilter: ["every", "some", "none"],
    SessionListRelationFilter: ["every", "some", "none"],
    AccountOrderByRelationAggregateInput: ["_count"],
    SessionOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image"],
    UserMaxOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image"],
    UserMinOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    InventarioCreateNestedOneWithoutProductoInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    InventarioUpdateOneWithoutProductoInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    ProductoCreateNestedOneWithoutInventarioInput: ["create", "connectOrCreate", "connect"],
    MovimientoInventarioCreateNestedManyWithoutInventarioInput: ["create", "connectOrCreate", "createMany", "connect"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    ProductoUpdateOneRequiredWithoutInventarioInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    MovimientoInventarioUpdateManyWithoutInventarioInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    InventarioCreateNestedOneWithoutMovimientoInventarioInput: ["create", "connectOrCreate", "connect"],
    UserCreateNestedOneWithoutMovimientosInput: ["create", "connectOrCreate", "connect"],
    EnumEnum_TipoMovimientoFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    InventarioUpdateOneRequiredWithoutMovimientoInventarioInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserUpdateOneWithoutMovimientosInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    UserCreateNestedOneWithoutAccountsInput: ["create", "connectOrCreate", "connect"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserUpdateOneRequiredWithoutAccountsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutSessionsInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutSessionsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    AccountCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    SessionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    MovimientoInventarioCreateNestedManyWithoutUsuarioInput: ["create", "connectOrCreate", "createMany", "connect"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    AccountUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    SessionUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    MovimientoInventarioUpdateManyWithoutUsuarioInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumEnum_TipoMovimientoFilter: ["equals", "in", "notIn", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedEnumEnum_TipoMovimientoWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    InventarioCreateWithoutProductoInput: ["id", "cantidad", "movimientoInventario"],
    InventarioCreateOrConnectWithoutProductoInput: ["where", "create"],
    InventarioUpsertWithoutProductoInput: ["update", "create"],
    InventarioUpdateWithoutProductoInput: ["id", "cantidad", "movimientoInventario"],
    ProductoCreateWithoutInventarioInput: ["id", "nombre", "foto"],
    ProductoCreateOrConnectWithoutInventarioInput: ["where", "create"],
    MovimientoInventarioCreateWithoutInventarioInput: ["id", "cantidad", "tipoMovimiento", "fecha", "usuario"],
    MovimientoInventarioCreateOrConnectWithoutInventarioInput: ["where", "create"],
    MovimientoInventarioCreateManyInventarioInputEnvelope: ["data", "skipDuplicates"],
    ProductoUpsertWithoutInventarioInput: ["update", "create"],
    ProductoUpdateWithoutInventarioInput: ["id", "nombre", "foto"],
    MovimientoInventarioUpsertWithWhereUniqueWithoutInventarioInput: ["where", "update", "create"],
    MovimientoInventarioUpdateWithWhereUniqueWithoutInventarioInput: ["where", "data"],
    MovimientoInventarioUpdateManyWithWhereWithoutInventarioInput: ["where", "data"],
    MovimientoInventarioScalarWhereInput: ["AND", "OR", "NOT", "id", "inventarioId", "cantidad", "tipoMovimiento", "fecha", "usuarioId"],
    InventarioCreateWithoutMovimientoInventarioInput: ["id", "cantidad", "producto"],
    InventarioCreateOrConnectWithoutMovimientoInventarioInput: ["where", "create"],
    UserCreateWithoutMovimientosInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions"],
    UserCreateOrConnectWithoutMovimientosInput: ["where", "create"],
    InventarioUpsertWithoutMovimientoInventarioInput: ["update", "create"],
    InventarioUpdateWithoutMovimientoInventarioInput: ["id", "cantidad", "producto"],
    UserUpsertWithoutMovimientosInput: ["update", "create"],
    UserUpdateWithoutMovimientosInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions"],
    UserCreateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "sessions", "movimientos"],
    UserCreateOrConnectWithoutAccountsInput: ["where", "create"],
    UserUpsertWithoutAccountsInput: ["update", "create"],
    UserUpdateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "sessions", "movimientos"],
    UserCreateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "accounts", "movimientos"],
    UserCreateOrConnectWithoutSessionsInput: ["where", "create"],
    UserUpsertWithoutSessionsInput: ["update", "create"],
    UserUpdateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "accounts", "movimientos"],
    AccountCreateWithoutUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    AccountCreateOrConnectWithoutUserInput: ["where", "create"],
    AccountCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    SessionCreateWithoutUserInput: ["id", "sessionToken", "expires"],
    SessionCreateOrConnectWithoutUserInput: ["where", "create"],
    SessionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    MovimientoInventarioCreateWithoutUsuarioInput: ["id", "cantidad", "tipoMovimiento", "fecha", "inventario"],
    MovimientoInventarioCreateOrConnectWithoutUsuarioInput: ["where", "create"],
    MovimientoInventarioCreateManyUsuarioInputEnvelope: ["data", "skipDuplicates"],
    AccountUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    AccountUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    AccountUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    AccountScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    SessionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    SessionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    SessionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    SessionScalarWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
    MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput: ["where", "update", "create"],
    MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput: ["where", "data"],
    MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput: ["where", "data"],
    MovimientoInventarioCreateManyInventarioInput: ["id", "cantidad", "tipoMovimiento", "fecha", "usuarioId"],
    MovimientoInventarioUpdateWithoutInventarioInput: ["id", "cantidad", "tipoMovimiento", "fecha", "usuario"],
    AccountCreateManyUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    SessionCreateManyUserInput: ["id", "sessionToken", "expires"],
    MovimientoInventarioCreateManyUsuarioInput: ["id", "inventarioId", "cantidad", "tipoMovimiento", "fecha"],
    AccountUpdateWithoutUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    SessionUpdateWithoutUserInput: ["id", "sessionToken", "expires"],
    MovimientoInventarioUpdateWithoutUsuarioInput: ["id", "cantidad", "tipoMovimiento", "fecha", "inventario"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
