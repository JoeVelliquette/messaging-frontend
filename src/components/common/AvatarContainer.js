import React from 'react';
import {AvatarGroup} from '@material-ui/lab';
import {StyledBadge} from "./StyledBadge";
import Avatar from "@material-ui/core/Avatar";

function AvatarContainer(props) {
    if (props.users.length > 1) {
        return (
            <AvatarGroup max={2} spacing='small' style={{marginRight: props.marginRight}}>
                {props.users.map(item => <Avatar alt={item.name} src={item.avatar} />)}
            </AvatarGroup>
        );
    }

    let user = props.users[0];

    return (
        <>
            {user.active ?
                <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    variant="dot"
                >
                    <Avatar alt={user.name} src={user.avatar} />
                </StyledBadge>
                :
                <Avatar alt={user.name} src={user.avatar} />
            }
        </>
    );
}

export default AvatarContainer;
