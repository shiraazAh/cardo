import React, {useState, useEffect} from "react";
import {Grid} from '@material-ui/core';
// import logoBrown from "../../assets/cardLogos/logoforbrown.png"
import IconBox from "../UI/Iconbox";
import FilterButton from "../UI/buttons/filterButtons"
// import Expense from './Expense'

import styles from './expenses.module.css';

const ExpensesContainer = React.forwardRef((props, ref) => {

    const [selectedFilter, setSelectedFilter] = useState({
      day: true,
      week: false,
      month: false,
      year: false
    })

    return( 
        <div ref={ref}>
          <div className={styles.topContainer}>
            <Grid container className={styles.Container} spacing={3}>
                <Grid item xs={12}>
                  <h3 className={styles.CardName}>Gold Card</h3>
                </Grid>
                <Grid container style={{marginLeft: '20px'}} spacing={3}>
                    <Grid item xs={3}>
                      <FilterButton class={styles.DateSort} 
                        selected={selectedFilter.day} 
                        click={() => setSelectedFilter({day: true, week: false, month: false, year: false})}>Day</FilterButton>
                    </Grid>
                    <Grid item xs={3}>
                      <FilterButton class={styles.DateSort} 
                        selected={selectedFilter.week} 
                        click={() => setSelectedFilter({day: false, week: true, month: false, year: false})}>Week</FilterButton>
                    </Grid>
                    <Grid item xs={3}>
                      <FilterButton class={styles.DateSort} 
                        selected={selectedFilter.month} 
                        click={() => setSelectedFilter({day: false, week: false, month: true, year: false})}>Month</FilterButton>
                    </Grid>
                    <Grid item xs={3}>
                      <FilterButton class={styles.DateSort} 
                        selected={selectedFilter.year} 
                        click={() => setSelectedFilter({day: false, week: false, month: false, year: true})}>Year</FilterButton>
                    </Grid>
                </Grid>

                <Grid container style={{borderBottom: '2px solid #F0EEFF', marginLeft: '20px', marginRight: '20px', marginTop: '5px'}} spacing={3}>
                <Grid item xs={6} style={{paddingBottom: '0px'}}>
                  <p className={styles.TotalWin}>Total <span style={{color: 'rgba(203, 43, 111, 1)'}}>WIN</span></p>
                </Grid>
                <Grid item xs={6} style={{paddingBottom: '0px'}}>
                  <p className={styles.WinAmount}>$258,563</p>
                </Grid>
                </Grid>
                {/* <Grid item xs={12} style={{padding: '0px'}}>
                  <p className={styles.Underline}></p>
                </Grid> */}

                <Grid container style={{borderBottom: '2px solid #F0EEFF', marginLeft: '20px', marginRight: '20px', marginTop: '5px', padding: '15px 0 10px'}} spacing={3}>
                  <Grid item xs={3}>
                    <IconBox color="brown" src={''}/>
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

                <Grid container style={{borderBottom: '2px solid #F0EEFF', marginLeft: '20px', marginRight: '20px', marginTop: '5px', padding: '15px 0 10px'}} spacing={3}>
                  <Grid item xs={3}>
                    <IconBox color="brown" src={''}/>
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

                <Grid container style={{borderBottom: '2px solid #F0EEFF', marginLeft: '20px', marginRight: '20px', marginTop: '5px', padding: '15px 0 10px'}} spacing={3}>
                  <Grid item xs={3}>
                    <IconBox color="brown" src={''}/>
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
                  
                <Grid container style={{borderBottom: '2px solid #F0EEFF', marginLeft: '20px', marginRight: '20px', marginTop: '5px', padding: '15px 0 10px'}} spacing={3}>
                  <Grid item xs={3}>
                    <IconBox color="brown" src={''}/>
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

                <Grid container style={{borderBottom: '2px solid #F0EEFF', marginLeft: '20px', marginRight: '20px', marginTop: '5px', padding: '15px 0 10px'}} spacing={3}>
                  <Grid item xs={3}>
                    <IconBox color="brown" src={''}/>
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

                <Grid container style={{borderBottom: '2px solid #F0EEFF', marginLeft: '20px', marginRight: '20px', marginTop: '5px', padding: '15px 0 10px'}} spacing={3}>
                  <Grid item xs={3}>
                    <IconBox color="brown" src={''}/>
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
                
                <Grid container style={{borderBottom: '2px solid #F0EEFF', marginLeft: '20px', marginRight: '20px', marginTop: '5px', padding: '15px 0 10px'}} spacing={3}>
                  <Grid item xs={3}>
                    <IconBox color="brown" src={''}/>
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
                  {/* <Grid item xs={12} style={{padding: '0px'}}>
                    <p className={styles.Underline}></p>
                  </Grid> */}
                  {/* <Grid item xs={12}>
                    <p className={styles.p}>Select a card</p>
                  </Grid>  
                  <Grid item xs={12} style={{padding: '0px'}}>
                    <p className={styles.Underline}></p>
                  </Grid> */}
                {/* <Expense /> */}
            </Grid>
          </div>
        </div>
)})

export default ExpensesContainer;
