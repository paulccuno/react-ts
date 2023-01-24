import { lazy, LazyExoticComponent } from 'react'
import { NoLazy } from '../01-lazyload/pages'

type JSXComponent = () => JSX.Element

interface Route {
	path: string
	component: LazyExoticComponent<JSXComponent> | JSXComponent
	name: string
	children?: Route[]
}

const LazyLayout = lazy(
	() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout')
)

export const routes: Route[] = [
	{
		path: '/lazyload',
		component: LazyLayout,
		name: 'LazyLoading Nested',
	},
	{
		path: '/nolazy',
		component: NoLazy,
		name: 'No LazyLoading',
	},
]
