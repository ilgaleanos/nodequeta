const { Router,Route,IndexRoute,IndexLink,Link,browserHistory,withRouter } = ReactRouter;

var Hello = require('../front/Hello.jsx')
var store = require('../store/store.jsx')

const app = () => {
	ReactDOM.render(
		<Router  history={browserHistory}  onUpdate={() => window.scrollTo(0, 0)}>
			<Route path="/" store={store} component={Hello}></Route>
		</Router>,
	document.getElementById('app')
	)
};
app();
