import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'
import Card, { CardContent, CardHeader } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar'
import KeyboardArrowUp from 'material-ui-icons/KeyboardArrowUp'
import KeyboardArrowDown from 'material-ui-icons/KeyboardArrowDown'
import ModeEdit from 'material-ui-icons/ModeEdit'
import Delete from 'material-ui-icons/Delete'
import Tooltip from 'material-ui/Tooltip'

import * as types from '../utils/PropTypes'

const Comment = ({ comment, handleVote, handleDeleteComment }) => (
    <Card>
        <CardHeader avatar={<Tooltip title="Score"><Avatar>{comment.voteScore}</Avatar></Tooltip>}
            title={
                <div>
                    <Button dense color="primary" onClick={handleVote('upVote')}><KeyboardArrowUp /></Button>
                    <Button dense color="accent" onClick={handleVote('downVote')}><KeyboardArrowDown /></Button>
                    <Tooltip title="Edit comment">
                        <Button component={Link} to={`/comments/${comment.id}/edit`}><ModeEdit /></Button>
                    </Tooltip>
                    <Tooltip title="Delete comment">
                        <Button color="accent" onClick={handleDeleteComment}><Delete /></Button>
                    </Tooltip>
                </div>
                } subheader={`@${comment.author} | ${(new Date(comment.timestamp)).toDateString()}`}>
        </CardHeader>
        <CardContent>
            <Typography type="body1">{comment.body}</Typography>
        </CardContent>
    </Card>
)


Comment.propTypes = {
    comment: types.comment.isRequired,
    handleVote: PropTypes.func.isRequired,
    handleDeleteComment: PropTypes.func.isRequired,
}

export default Comment