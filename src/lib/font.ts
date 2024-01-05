// lib
import localFont from '@next/font/local'
import { Figtree, Mulish } from "next/font/google";

export const muli = localFont({
  src: [
    {
      path: '../../public/font/Muli.ttf',
      weight: '400'
    },
    {
      path: '../../public/font/Muli-SemiBold.ttf',
      weight: '600'
    },
    {
      path: '../../public/font/Muli-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-muli'
})

export const figtree = Figtree({ subsets: ["latin"] });
export const mulish = Mulish({ subsets: ["latin"] });


