/*
** Copyright (c) 2020, 2024, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

const DISALLOWED_RESOURCE_ANALYTICS_SQL_KEYWORDS = /\b(alter|begin|call|commit|create|delete|drop|exec|execute|grant|insert|merge|replace|revoke|rollback|truncate|update)\b/i
const SELECT_QUERY_PREFIX = /^select(?:\s|$)/i

const stripSqlStringLiterals = (sql: string): string => {
    return sql
        .replace(/'(?:''|[^'])*'/g, "''")
        .replace(/"(?:\"\"|[^"])*"/g, '""')
}

export const validateResourceAnalyticsSql = (sql: string): string => {
    const validatedSql = sql.trim()
    if (!SELECT_QUERY_PREFIX.test(validatedSql)) throw new Error('Resource Analytics SQL must start with SELECT')
    if (validatedSql.includes(';')) throw new Error('Resource Analytics SQL cannot contain semicolons')
    if (DISALLOWED_RESOURCE_ANALYTICS_SQL_KEYWORDS.test(stripSqlStringLiterals(validatedSql))) {
        throw new Error('Resource Analytics SQL cannot contain mutation or admin keywords')
    }
    return validatedSql
}
