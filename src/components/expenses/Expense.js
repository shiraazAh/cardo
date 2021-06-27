import React from 'react';
import { Grid } from '@material-ui/core';
import IconBox from "../UI/IconBox/Iconbox";
import styles from './expenses.module.css';

const Expense = (props) => (
  <Grid container style={{borderBottom: '2px solid #F0EEFF', marginLeft: '20px', marginRight: '20px', marginTop: '5px', padding: '15px 0 10px'}} spacing={3}>
  <Grid item xs={3}>
    <IconBox 
      color="brown" 
      selectedCard={props.selectedCard}
      src={''}/>
  </Grid>  
  <Grid item xs={8}>
    <div className={styles.ExpenseBox}>
      <span className={styles.ExpenseBoxTitle}>IN</span>
      <span>${props.expenses}</span>
    </div>
    <div className={styles.ExpenseBox}>
      <span className={styles.ExpenseBoxTitle}>OUT</span>
      <span>$0</span>
    </div>
    <div className={styles.ExpenseBox}>
      <span className={styles.ExpenseBoxTitle}>WIN</span>
      <span>+ ${props.expenses}</span>
    </div>
  </Grid>  
</Grid>  
)

export default Expense;