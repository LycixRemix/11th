'use client'

import 'react-photo-view/dist/react-photo-view.css'
import { ImgHTMLAttributes } from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'

export default function Image(props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <PhotoProvider>
      <PhotoView src={props.src}>
        <img src={props.src} alt="" className="cursor-pointer" />
      </PhotoView>
    </PhotoProvider>
  )
}
