import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    const { user } = this.props;
        return (
            <div class="card">
                <Image source={ user.avatar } alternativeText="User avatar" class="card-img-top" alt="Profile Picture" />
                <div class="card-body">
                <div class="card-text">
                    <p> { user.name } </p>
                    <p> { user.email } </p>
                </div>
            </div>
        </div>
        )
    }
}

export default UserProfile;