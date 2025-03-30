import * as rwp from 'react-wire-persisted'

const { key, getPrefixedKeys } = rwp.utils

export const NS = 'react-base'

//

key('theme')

key('user')

//

export const themes = ['light', 'dark']

export const primaryMenuItems = [
    { label: 'HOME', to: '/' },
    { label: 'ABOUT', to: '/about' },
    { label: 'PROJECTS', to: '/projects' },
]

export const primaryMenuItemsBottom = [
    { label: 'SIGN OUT', to: '/signout' },
]

const prefixedKeys = getPrefixedKeys(NS)

export { prefixedKeys as keys }

//

export const columnsMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    7: 'grid-cols-7',
    8: 'grid-cols-8',
    9: 'grid-cols-9',
    10: 'grid-cols-10',
    11: 'grid-cols-11',
    12: 'grid-cols-12',
}
