import withSay from "../hoc/withSay";

@withSay
class WithOutSay extends React.Component {
    render() {
        return (
            <div>
                {this.props.say()}
            </div>
        )
    }
}

export default WithOutSay