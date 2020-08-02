import Header from "../components/Header";

function withSay(WrappedComponent) {
    return class extends React.Component {
        say() {
            return 'say~ hello'
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    say={this.say} />
            )
        }
    }
}

export default withSay;