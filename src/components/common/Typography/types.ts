import type { JSX, ElementType, ComponentPropsWithoutRef } from 'react'

export enum TypographyVariant {
  BODY_S = 'body-s',
  BODY_M = 'body-m',
  BODY_L = 'body-l',
  SUBTITLE_S = 'subtitle-s',
  SUBTITLE_M = 'subtitle-m',
  SUBTITLE_L = 'subtitle-l',
  SUBTITLE_XL = 'subtitle-xl',
  TITLE_S = 'title-s',
  TITLE_M = 'title-m',
  TITLE_L = 'title-l',
  TITLE_XL = 'title-xl',
}

type ElementTagNames =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'a'
  | 'span'
  | 'label'
  | 'strong'
  | 'em'

export interface TypographyOwnProps<E extends ElementType = ElementTagNames> {
  children: string | string[] | number | JSX.Element | JSX.Element[]
  as?: E
  className?: string
  color?: 'primary' | 'secondary'
  variant: `${TypographyVariant}`
}

export type TypographyProps<E extends ElementType = ElementTagNames> = TypographyOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof TypographyOwnProps<E>>
