import React, {useState, useEffect, useRef, useLayoutEffect} from "react";
import {Grid} from '@material-ui/core';
// import logoBrown from "../../assets/cardLogos/logoforbrown.png"
import IconBox from "../UI/Iconbox";
import FilterButton from "../UI/buttons/filterButtons"
import DigitRoll from 'digit-roll-react'
// import Expense from './Expense'

import styles from './expenses.module.css';

const ExpensesContainer = React.forwardRef((props, ref) => {

    const [selectedFilter, setSelectedFilter] = useState({
      day: true,
      week: false,
      month: false,
      year: false
    })

    const [expenses, setExpenses] = useState(3280)
    const [num, setNum] = useState(0)
    const [expenseAmtDigits, setExpenseAmtDigits] = useState(5)

    const brownAmount = 158420;
    const blueAmount = 128300;
    const violetAmount = 487612;

    useEffect(() => {
      if(selectedFilter.day){
        setExpenses('3,280')
        setExpenseAmtDigits(4)
      } else if(selectedFilter.week){
        setExpenses('11,649')
        setExpenseAmtDigits(5)
      } else if(selectedFilter.month){
        setExpenses('35,129')
        setExpenseAmtDigits(5)
      } else if(selectedFilter.year){
        setExpenses('76,380')
        setExpenseAmtDigits(5)
      } 
    }, [selectedFilter])

    useEffect(() => {
      const amount = props.selectedCard === 'brown' ? brownAmount : props.selectedCard === 'blue' ? blueAmount : violetAmount;
      const day = amount;
      const week = amount + 121569
      const month = amount + 361569
      const year = amount + 500169
      if(props.showAmount) {
        if(selectedFilter.day) setNum(day)
        else if(selectedFilter.week) setNum(week)
        else if(selectedFilter.month) setNum(month)
        else if(selectedFilter.year) setNum(year)
      }
    }, [props.selectedCard, selectedFilter, props.showAmount])


    return( 
        <div ref={ref}>
          <div className={styles.topContainer}>
            <Grid container className={styles.Container} spacing={3}>
                <Grid item xs={12}>
                  <h3 className={styles.CardName}>{props.selectedCard === 'brown' ? 'Gold Card' : props.selectedCard === 'blue' ? 'Blue Card' : 'Violet Card'}</h3>
                </Grid>
                <Grid container style={{marginLeft: '20px'}} spacing={3}>
                    <Grid item xs={3}>
                      <FilterButton class={styles.DateSort}
                        selectedCard={props.selectedCard} 
                        selected={selectedFilter.day} 
                        click={() => setSelectedFilter({day: true, week: false, month: false, year: false})}>Day</FilterButton>
                    </Grid>
                    <Grid item xs={3}>
                      <FilterButton class={styles.DateSort}
                        selectedCard={props.selectedCard} 
                        selected={selectedFilter.week} 
                        click={() => setSelectedFilter({day: false, week: true, month: false, year: false})}>Week</FilterButton>
                    </Grid>
                    <Grid item xs={3}>
                      <FilterButton class={styles.DateSort}
                        selectedCard={props.selectedCard} 
                        selected={selectedFilter.month} 
                        click={() => setSelectedFilter({day: false, week: false, month: true, year: false})}>Month</FilterButton>
                    </Grid>
                    <Grid item xs={3}>
                      <FilterButton class={styles.DateSort}
                        selectedCard={props.selectedCard} 
                        selected={selectedFilter.year} 
                        click={() => setSelectedFilter({day: false, week: false, month: false, year: true})}>Year</FilterButton>
                    </Grid>
                </Grid>

                <Grid container style={{borderBottom: '2px solid #F0EEFF', marginLeft: '20px', marginRight: '20px', marginTop: '5px'}} spacing={3}>
                <Grid item xs={6} style={{paddingBottom: '0px'}}>
                  <p className={styles.TotalWin}>Total <span style={{color: 'rgba(203, 43, 111, 1)'}}>WIN</span></p>
                </Grid>
                <Grid item xs={6} style={{paddingBottom: '0px'}}>
                  <DigitRoll className={styles.WinAmount} num={num} height={2} width={1.3} length={6} divider="," />
                  {/* <p className={styles.WinAmount}>$258,563</p> */}
                </Grid>
                </Grid>
                {/* <Grid item xs={12} style={{padding: '0px'}}>
                  <p className={styles.Underline}></p>
                </Grid> */}

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
                      <span>${expenses}</span>
                    </div>
                    <div className={styles.ExpenseBox}>
                      <span className={styles.ExpenseBoxTitle}>OUT</span>
                      <span>$0</span>
                    </div>
                    <div className={styles.ExpenseBox}>
                      <span className={styles.ExpenseBoxTitle}>WIN</span>
                      <span>+ ${expenses}</span>
                    </div>
                  </Grid>  
                </Grid>  

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
                      <span>${expenses}</span>
                    </div>
                    <div className={styles.ExpenseBox}>
                      <span className={styles.ExpenseBoxTitle}>OUT</span>
                      <span>$0</span>
                    </div>
                    <div className={styles.ExpenseBox}>
                      <span className={styles.ExpenseBoxTitle}>WIN</span>
                      <span>+ ${expenses}</span>
                    </div>
                  </Grid>  
                </Grid>

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
                      <span>${expenses}</span>
                    </div>
                    <div className={styles.ExpenseBox}>
                      <span className={styles.ExpenseBoxTitle}>OUT</span>
                      <span>$0</span>
                    </div>
                    <div className={styles.ExpenseBox}>
                      <span className={styles.ExpenseBoxTitle}>WIN</span>
                      <span>+ ${expenses}</span>
                    </div>
                  </Grid>  
                </Grid>
                  
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
                      <span>${expenses}</span>
                    </div>
                    <div className={styles.ExpenseBox}>
                      <span className={styles.ExpenseBoxTitle}>OUT</span>
                      <span>$0</span>
                    </div>
                    <div className={styles.ExpenseBox}>
                      <span className={styles.ExpenseBoxTitle}>WIN</span>
                      <span>+ ${expenses}</span>
                    </div>
                  </Grid>  
                </Grid>  

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
                      <span>${expenses}</span>
                    </div>
                    <div className={styles.ExpenseBox}>
                      <span className={styles.ExpenseBoxTitle}>OUT</span>
                      <span>$0</span>
                    </div>
                    <div className={styles.ExpenseBox}>
                      <span className={styles.ExpenseBoxTitle}>WIN</span>
                      <span>+ ${expenses}</span>
                    </div>
                  </Grid>  
                </Grid>  

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
                      <span>${expenses}</span>
                    </div>
                    <div className={styles.ExpenseBox}>
                      <span className={styles.ExpenseBoxTitle}>OUT</span>
                      <span>$0</span>
                    </div>
                    <div className={styles.ExpenseBox}>
                      <span className={styles.ExpenseBoxTitle}>WIN</span>
                      <span>+ ${expenses}</span>
                    </div>
                  </Grid>  
                </Grid>  
                
                <Grid container style={{ marginLeft: '20px', marginRight: '20px', marginTop: '5px', padding: '15px 0 10px'}} spacing={3}>
                  <Grid item xs={3}>
                    <IconBox 
                      color="brown" 
                      selectedCard={props.selectedCard}
                      src={''}/>
                  </Grid>  
                  <Grid item xs={8}>
                    <div className={styles.ExpenseBox}>
                      <span className={styles.ExpenseBoxTitle}>IN</span>
                      <span>${expenses}</span>
                    </div>
                    <div className={styles.ExpenseBox}>
                      <span className={styles.ExpenseBoxTitle}>OUT</span>
                      <span>$0</span>
                    </div>
                    <div className={styles.ExpenseBox}>
                      <span className={styles.ExpenseBoxTitle}>WIN</span>
                      <span>+ ${expenses}</span>
                    </div>
                  </Grid>  
                </Grid>  
                
                <Grid container style={{height: '100px', marginLeft: '20px', marginRight: '20px', marginTop: '5px', padding: '15px 0 10px'}} spacing={3}>
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

export default React.memo(ExpensesContainer);
