import { cssBundleHref } from '@remix-run/css-bundle'
import { type LinksFunction } from '@remix-run/node'
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react'
import faviconUrl from './assets/favicon.svg'
import fontStylesheetUrl from './styles/font.css'

export const links: LinksFunction = () => [
	...(cssBundleHref
		? [{ rel: 'stylesheet', href: cssBundleHref }]
		: [
				{
					rel: 'icon',
					type: 'image/svg+xml',
					href: faviconUrl,
				},
				{ rel: 'stylesheet', href: fontStylesheetUrl },
		  ]),
]

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
