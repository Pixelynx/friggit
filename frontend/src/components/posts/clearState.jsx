import React from 'react';

export const ClearState = () => {
  let clearState = this.setState({
      subfriggit: '',
      post: {
        title_input: '',
        text_input: ''
      },
      img_vid: {
        title_input: '',
        img_vid_src: ''
      },
      link_: {
        title_input: '',
        url: ''
      },
      oc: false,
      spoiler: false,
      nsfw: false,
      isValid: false
    })
  return clearState;

}
