import React from 'react';
import * as util from '../../utils/apiCalls.js';

export const ClearState = ({ clearState, isValid, post, subfriggit, oc, nsfw, spoiler, img_vid, link_ }) => {
  return(
    this.setState({
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
  )

}
