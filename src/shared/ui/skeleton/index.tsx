import React from 'react'

import style from './index.module.scss'

export interface ISkeletonProps {
    height: string
    width: string
    maxWidth?: string
    borderRadius: string
}

const Skeleton: React.FC<ISkeletonProps> = ({ height, width, maxWidth = '100%', borderRadius }) => {
    return <div className={style.skeleton} style={{ height, width, maxWidth, borderRadius }} data-testid={'skeleton'} />
}

export default Skeleton
