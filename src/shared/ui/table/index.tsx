import { ReactNode, memo } from 'react'

import Typography from '../typography'
import style from './index.module.scss'

interface ITableProps {
    columns: Array<{ id: string; title: string; maxWidth?: number }>
    dataSource: Array<Record<string, ReactNode>>
}

const Table: React.FC<ITableProps> = memo(({ columns, dataSource }) => {
    return (
        <div>
            <div className={style.columns}>
                {columns.map(({ id, title, maxWidth }) => (
                    <Typography
                        styles={{ maxWidth: maxWidth || 160, width: '100%' }}
                        type={'body2'}
                        fontWeight={'600'}
                        isUppercase
                        key={id}
                    >
                        {title}
                    </Typography>
                ))}
            </div>

            <div className={style.dataSource}>
                {dataSource.map((data, index) => (
                    <div className={style.dataSource_column} key={index}>
                        {columns.map(
                            ({ id, maxWidth }) =>
                                data[id] && (
                                    <div style={{ maxWidth: maxWidth || 160, width: '100%' }} key={id}>
                                        {data[id]}
                                    </div>
                                ),
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
})

Table.displayName = 'Table'

export default Table
