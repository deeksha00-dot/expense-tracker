let transaction = [
    {
        id:1,
        date:"2025-01-14",
        amount:-440,
        status:"success",
        type:"expense"
    },
    {
        id:1,
        date:"2025-01-20",
        amount:-440,
        status:"success",
        type:"expense"
    },
    {
        id:1,
        date:"2025-01-09",
        amount:-440,
        status:"success",
        type:"expense"
    },
];

let monthlyIncome = 22000;
let monthyExpense = 13709;

const today =new Date().toISOString().split('T')[0];

document.getElementById('incomeDate').value = today;
document.getElementById('expenseDate').value = today;


function openIncomeModal(){
    document.getElementById('incomeModal').style.display='block';
    document.body.style.overflow='hidden'
}
function openExpenseModal(){
    document.getElementById('expenseModal').style.display='block';
    document.body.style.overflow='hidden'
}
function closemodal(modalId){
    document.getElementById(modalId).style.display='none'
    document.body.style.overflow='auto'

    if(modalId==='incomeModal'){
            document.getElementById('incomeForm').reset()
            document.getElementById('incomeDate').value= today
        }else{
            document.getElementById('expenseForm').reset()
            document.getElementById('expenseDate').value= today
        }
}