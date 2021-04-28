import React from 'react';

import classes from './CustomRadio.module.scss';

import Radio from '@material-ui/core/Radio';


function CustomRadio( props ) {
  return (
    <Radio
      classes={ {
        root: classes.root
      } }
      // disableRipple
      color="primary"
      checkedIcon={ <span className={ [classes.icon, classes.checkedIcon].join( ' ' ) } /> }
      icon={ <span className={ classes.icon } /> }
      { ...props }
    />
  );
}

export default CustomRadio;