import './index.scss'
import { withProviders } from './providers'
import Main from 'widgets/Main'
import AuthModal from 'widgets/AuthModal'

function App() {
	return (
		<>
			<Main />
			<AuthModal />
		</>
	)
}

export default withProviders(App)
