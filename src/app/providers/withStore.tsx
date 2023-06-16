import { Provider } from 'react-redux'
import { store } from 'app/store'

const withStore = (Component: React.ComponentType) => (
	<Provider store={store}>
		<Component />
	</Provider>
)

export default withStore
