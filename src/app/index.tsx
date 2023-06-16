import Auth from 'features/Auth'
import './index.scss'
import { withProviders } from './providers'
import Main from 'widgets/Main'

function App() {
	return (
		<>
			<Main />
			{/* <Auth /> */}
		</>
	)
}

export default withProviders(App)
