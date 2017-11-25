import { Component } from 'react';
import { connect } from 'react-redux';

import { deletePost } from '../actions';

class DeletePostPage extends Component {
    componentDidMount() {
        this.props.deletePost(this.props.match.params.id);
    }

    render() {
        return null;
    }
}

export default connect(null, { deletePost })(DeletePostPage);