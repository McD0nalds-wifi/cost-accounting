import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'

import Skeleton from './index'

describe('skeleton', () => {
    it('Renders skeleton with correct styles', () => {
        const styles = {
            height: '24px',
            width: '120px',
            borderRadius: '8px',
        }

        render(<Skeleton {...styles} />)

        expect(screen.getByTestId('skeleton')).toHaveStyle({
            height: '24px',
            width: '120px',
            'border-radius': '8px',
        })
    })
})
