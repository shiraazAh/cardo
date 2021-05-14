import React from 'react';
import { Grid } from '@material-ui/core';

import styles from './expenses.module.css';

const Expense = (props) => {
    <React.Fragment>
              <Grid container style={{marginLeft: '20px'}} spacing={3}>
              <Grid item xs={12}>
                <p className={styles.p}>Select a card</p>
              </Grid>  
              <Grid item xs={12} style={{padding: '0px'}}>
                <p className={styles.Underline}></p>
              </Grid>
            </Grid>  
    </React.Fragment>
}

export default Expense;