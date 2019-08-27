const reportReducerDefaultState = []

export default(state=reportReducerDefaultState,action) =>{
    
    switch(action.type){
        case 'ADD_REPORT':
            return[
                ...state,
                action.report
            ]
        case 'SET_REPORTS':
            return action.reports

        case 'REMOVE_REPORT':
            return state.filter((report) => report.id !== action.id)

        case 'EDIT_REPORT':
            return state.map((report) => {
                if (report.id === action.id) {
                    return {
                        ...report,
                        ...action.updates
                    }
                } else {
                    return report
                }

            })
        
         default:
             return state
    }
}