import { Sora, Fira_Code } from 'next/font/google';

export const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable:'--font-sora'
});

export const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
});
