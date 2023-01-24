import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom'
import logo from '../assets/react.svg'
import { routes } from './routes'

/**
 * Need to install react-router-dom V5, using: npm install react-router-dom@5
 * Also need to install a dev dependecie for use typescript: npm install -D @types/react-router-dom
 */

export const Navigation = () => {
	return (
		<Router>
			<div className="main-layout">
				<nav>
					<img src={logo} alt="React Logo" />
					<ul>
						{routes.map(({ path, name }) => (
							<li key={path}>
								<NavLink to={path} activeClassName="nav-active" exact>
									{name}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>

				<Switch>
					{routes.map(({ path, component: Component }) => (
						<Route key={path} path={path} render={() => <Component />} />
					))}

					<Redirect to={routes[0].path} />
				</Switch>
			</div>
		</Router>
	)
}
