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

export interface TypographyProps {
  value: string | number
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  className?: string
  variant: TypographyVariant
}
