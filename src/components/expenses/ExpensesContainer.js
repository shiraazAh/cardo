import React from "react";
import {Grid} from '@material-ui/core';
import logoBrown from "../../assets/cardLogos/logoforbrown.png"
import Expense from './Expense'

import styles from './expenses.module.css';

const ExpensesContainer = React.forwardRef((props, ref) => {

    return( 
        <div ref={ref}>
          <div className={styles.topContainer}>
            <Grid container className={styles.Container} spacing={3}>
                <Grid item xs={12}>
                  <h3 className={styles.CardName}>Gold Card</h3>
                </Grid>
                <Grid container style={{marginLeft: '20px'}} spacing={3}>
                    <Grid item xs={3}>
                      <p className={styles.DateSort}>Day</p>
                    </Grid>
                    <Grid item xs={3}>
                      <p className={styles.DateSort}>Week</p>
                    </Grid>
                    <Grid item xs={3}>
                      <p className={styles.DateSort}>Month</p>
                    </Grid>
                    <Grid item xs={3}>
                      <p className={styles.DateSort}>Year</p>
                    </Grid>
                </Grid>

                <Grid item xs={6} style={{paddingBottom: '0px'}}>
                  <p className={styles.TotalWin}>Total <span style={{color: 'rgba(203, 43, 111, 1)'}}>WIN</span></p>
                </Grid>
                <Grid item xs={6} style={{paddingBottom: '0px'}}>
                  <p className={styles.WinAmount}>$258,563</p>
                </Grid>
                <Grid item xs={12} style={{padding: '0px'}}>
                  <p className={styles.Underline}></p>
                </Grid>

                <Grid container style={{marginLeft: '20px'}} spacing={3}>
                  <Grid item xs={3}>
                    <img src={logoBrown} alt="Expense image"></img>
                  </Grid>  
                  <Grid item xs={8}>
                    <div className={styles.ExpenseBox}>
                      <span className={styles.ExpenseBoxTitle}>IN</span>
                      <span>$35,234</span>
                    </div>
                    <div className={styles.ExpenseBox}>
                      <span className={styles.ExpenseBoxTitle}>OUT</span>
                      <span>$0</span>
                    </div>
                    <div className={styles.ExpenseBox}>
                      <span className={styles.ExpenseBoxTitle}>WIN</span>
                      <span>+ $35,234</span>
                    </div>
                  </Grid>  
                </Grid>  
                  <Grid item xs={12} style={{padding: '0px'}}>
                    <p className={styles.Underline}></p>
                  </Grid>
                  <Grid item xs={12}>
                    <p className={styles.p}>Select a card</p>
                  </Grid>  
                  <Grid item xs={12} style={{padding: '0px'}}>
                    <p className={styles.Underline}></p>
                  </Grid>
                {/* <Expense /> */}
            </Grid>
          </div>
        </div>
)})

export default ExpensesContainer;
