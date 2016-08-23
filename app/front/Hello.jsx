const { observer } = mobxReact;

@observer
class Hello extends React.Component {
	constructor(props){
		super(props);
		this.props = props;
		this.store = props.route.store;
	}

	changeName(){
		this.store.name = Math.random();
	}

	render() {
		return (
			<div onClick={this.changeName.bind(this)} >Hello, {this.store.name}! : {this.store.nombres}</div>
		)
	}
}
module.exports = Hello;
