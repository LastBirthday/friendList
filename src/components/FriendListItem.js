/**
 * Created by Dds on 05.03.2017.
 */

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class FriendListItem extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        starred: PropTypes.boolean,
        starFriend: PropTypes.func.isRequired,
        onTrashClick: PropTypes.func.isRequired
    }

    render () {
        return (
            <li>
                <div>
                    <div><span>{this.props.name}</span></div>
                    <div><small>xx friends in common</small></div>
                </div>
                <div>
                    <button onClick={() => this.props.starFriend(this.props.id)}>
                        <i className={classnames('fa', { 'fa-star': this.props.starred }, { 'fa-star-o': !this.props.starred })} />
                    </button>
                    <button onClick={() => this.props.deleteFriend(this.props.id)}>
                        <i className="fa fa-trash" />
                    </button>
                </div>
            </li>
        );
    }

}