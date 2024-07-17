const initialStateCustomer = {
    fullname: "",
    nationalID: "",
    createdAt: "",
}



function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
        case "customer/createAccount":
            return {...state, fullname: action.payload.fullname, nationalID: action.payload.nationalID, createdAt: action.payload.createdAt}
        
        case "customer/updateName":
            return {...state, fullname: action.payload}

        default:
            return state
    }
}





function createAccount(fullname, nationalID) {
    return {type: "customer/createAccount", payload: {fullname, nationalID, createdAt: new Date().toISOString()}}
}

function updateName(fullname) {
    return {type: "customer/updateName", payload: fullname}
}
