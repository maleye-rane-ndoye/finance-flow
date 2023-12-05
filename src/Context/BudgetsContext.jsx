import React, {useContext} from "react"
import useLocalStorage  from "../Hooks/useLocalStorage"
import {v4 as uuidV4} from "uuid"

//creation du context budgetaire 
const BudgetsContext = React.createContext()





//creation de la fonction qui utilise le context budgrtaire
export  function useBudgets(){

    return useContext(BudgetsContext)
}



//creation d'un fournisseur de valeurs à notre context

export const BudgetsProvider = ({children}) => {
 const [budgets, setBudgets] = useLocalStorage( "budgets", [])
 const [expenses, setExpenses] = useLocalStorage( "expenses", [])


    //trouver la depense pour un budget donner à travaers l'identité de ce budget
    function getBudgetExpense(budgetId){
        return expenses.filter(expense => expense.budgetId === budgetId)
    }


//ajouter un nouveau categorie de budget tout en evitant d'ajouter le meme nom de buget deja existant
    function addBudget({name, max}){
        setBudgets(prevBudgets => {
            if(prevBudgets.find(budget => budget.name === name)){
                return prevBudgets
            }else{
                return [...prevBudgets, {id: uuidV4(), name,max}]
            }
        })
    }

//ajouter une 
    function addExpense({description, amount, budgetId}){
        setExpenses(prevExpenses => {
            return [...prevExpenses, {id: uuidV4, description, amount, budgetId}]
        })
    } 

    
    function deleteBudget({id}) {
        setBudgets(prevBudgets => {
            return prevBudgets.filter(budget => budget.id !==  id)
        })
    }


    function deleteExpense({id}) {
        setExpenses(prevExpenses => {
            return prevExpenses.filter(expense => expense.id !== id)
        })
    }


    return(<BudgetsContext.Provider
            value={{
                budgets,
                expenses,
                getBudgetExpense,
                addBudget,
                addExpense,
                deleteBudget,
                deleteExpense
            }}>{children}</BudgetsContext.Provider>)




}