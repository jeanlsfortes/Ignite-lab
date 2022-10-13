import { Meta, StoryObj } from '@storybook/react';
import {Text, TextProps} from './Text';

export default{
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Loucura loucura p......'
    },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args:{
        size: 'sm',
    } 
}

export const Largue: StoryObj<TextProps> = {
    args:{
        size: 'lg',
    }
}

export const trap: StoryObj<TextProps> = {
    args:{
        asChild: true,
        children: (
            <h1>olha só oq rolou</h1>
        )
    }
}
