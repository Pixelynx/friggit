import React from 'react';

export const PostIsValid = (props) => {
  const { title, subfriggit, isValid, post_text_input } = this.props
  return(
    <>
        {this.props.title && this.props.subfriggit ?
          this.props.setState({ isValid: 'true' }) : null
        }

    </>
)

};
