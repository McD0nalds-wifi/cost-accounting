import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'

import Button from './index'

describe('button', () => {
    it('Renders button text', () => {
        const text = 'Button text'

        render(<Button type={'primary'}>{text}</Button>)

        expect(screen.getByRole('button')).toHaveTextContent(text)
    })
})
