const initialStateAccount = {
    balance: 0,
    loan:0,
    loanPurpose: ""
}

function accountReducer(state = initialStateAccount, action) {
    switch (action.type) {
        case "account/deposit":
            return {...state, balance: state.balance + action.payload}
        case "account/withdraw":
            return {...state, balance: state.balance - action.payload}
        case "account/requestLoan":
            if(state.loan > 0) return;
            return {...state, loan: action.payload.amount, loanPurpose: action.payload.loanPurpose, balance: state.balance + action.payload.amount}
        case "account/payLoan":
            return {...state, loan: 0, loanPurpose: "", balance: state.balance - state.loan}   
        default:
            return state
    }
}

function deposit(amount) {
    return {type: "account/deposit", payload: amount}
}

function withdraw(amount) {
    return {type: "account/withdraw", payload: amount}
}

function requestLoan(amount, loanPurpose) {
    return {type: "account/requestLoan", payload: {amount, loanPurpose}}
}

function payLoan() {
    return {type: "account/payLoan"}
}