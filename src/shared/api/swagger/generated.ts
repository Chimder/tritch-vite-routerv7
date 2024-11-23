/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * Tritch auth
 * for auth test
 * OpenAPI spec version: 1.0
 */
import { customInstance } from './axios.instance'
import type { BodyType } from './axios.instance'

export type MailControllerGetMailParams = {
  email: string
}

export type AuthControllerPasswordResetParams = {
  token: string
  newPassword: string
}

export type AuthControllerRequestPasswordResetParams = {
  email: string
}

export type AuthControllerIsNameTakeParams = {
  name: string
}

export interface GetSessionDto {
  email: string
  exp: number
  iat: number
  id: number
}

export interface IsNameTaken {
  name: string
}

export interface SingInBodyDto {
  identifier: string
  password: string
}

export interface SingUpBodyDto {
  email: string
  name: string
  password: string
}

export interface PatchAccountDto {
  isBlocking?: boolean
}

export interface AccountDto {
  id: string
  isBlocking: boolean
  name: string
  ownerId: string
}

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

export const appControllerGetHello = (options?: SecondParameter<typeof customInstance>) => {
  return customInstance<void>({ url: `/`, method: 'GET' }, options)
}

export const accountControllerGetAccount = (options?: SecondParameter<typeof customInstance>) => {
  return customInstance<AccountDto>({ url: `/account`, method: 'GET' }, options)
}

export const accountControllerPathcAccount = (
  patchAccountDto: BodyType<PatchAccountDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<PatchAccountDto>(
    {
      url: `/account`,
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      data: patchAccountDto,
    },
    options,
  )
}

export const authControllerSingUp = (
  singUpBodyDto: BodyType<SingUpBodyDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<void>(
    {
      url: `/auth/sing-up`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: singUpBodyDto,
    },
    options,
  )
}

export const authControllerSingIn = (
  singInBodyDto: BodyType<SingInBodyDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<void>(
    {
      url: `/auth/sing-in`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: singInBodyDto,
    },
    options,
  )
}

export const authControllerIsNameTake = (
  params: AuthControllerIsNameTakeParams,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<IsNameTaken>({ url: `/auth/isNameTake`, method: 'POST', params }, options)
}

export const authControllerSingOut = (options?: SecondParameter<typeof customInstance>) => {
  return customInstance<void>({ url: `/auth/sing-out`, method: 'POST' }, options)
}

export const authControllerGetSessionInfo = (options?: SecondParameter<typeof customInstance>) => {
  return customInstance<GetSessionDto>({ url: `/auth/session`, method: 'GET' }, options)
}

export const authControllerRequestPasswordReset = (
  params: AuthControllerRequestPasswordResetParams,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<void>({ url: `/auth/resetPassReq`, method: 'POST', params }, options)
}

export const authControllerPasswordReset = (
  params: AuthControllerPasswordResetParams,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<void>({ url: `/auth/resetPassword`, method: 'POST', params }, options)
}

export const mailControllerGetMail = (
  params: MailControllerGetMailParams,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<void>({ url: `/mail/mail`, method: 'POST', params }, options)
}

export type AppControllerGetHelloResult = NonNullable<
  Awaited<ReturnType<typeof appControllerGetHello>>
>
export type AccountControllerGetAccountResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerGetAccount>>
>
export type AccountControllerPathcAccountResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerPathcAccount>>
>
export type AuthControllerSingUpResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSingUp>>
>
export type AuthControllerSingInResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSingIn>>
>
export type AuthControllerIsNameTakeResult = NonNullable<
  Awaited<ReturnType<typeof authControllerIsNameTake>>
>
export type AuthControllerSingOutResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSingOut>>
>
export type AuthControllerGetSessionInfoResult = NonNullable<
  Awaited<ReturnType<typeof authControllerGetSessionInfo>>
>
export type AuthControllerRequestPasswordResetResult = NonNullable<
  Awaited<ReturnType<typeof authControllerRequestPasswordReset>>
>
export type AuthControllerPasswordResetResult = NonNullable<
  Awaited<ReturnType<typeof authControllerPasswordReset>>
>
export type MailControllerGetMailResult = NonNullable<
  Awaited<ReturnType<typeof mailControllerGetMail>>
>