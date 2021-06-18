import Main from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Basic: Story = () => (
  <Main
    title={'React Avançado'}
    description={'Typescript, ReactJS, NextJS e Styled Components'}
  />
)
