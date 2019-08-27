import database from '../firebase/firebase'

export const addReport = (report) =>({
    type: 'ADD_REPORT',
    report
})


 export const startAddReport = (reportData={}) =>{
    return (dispatch,getState) =>{
        const uid = getState().auth.uid
        const{
            title= "",
            body= "",
            author="",
            createdAt=0,
            abuser=""

        }=reportData
    const report = {title, body, author, createdAt, abuser}

    return database.ref(`users/${uid}/reports`).push(report).then((ref)=>{
        dispatch(addReport({
            id:ref.key,
            ...report
        }))
    })
    }
    
}

export const setReports = (reports)=>({
    type: 'SET_REPORTS',
    reports
})

export const startSetReports = ()=>{
    return(dispatch, getState) =>{
        const uid = getState().auth.uid

        return database.ref(`users/${uid}/reports`).once('value').then((snapshot)=>{
            const reports = []
            snapshot.forEach((childSnapshot)=>{
                reports.push({
                    id:childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setReports(reports))
        })
    }
}

export const removeReport = ({id}={}) =>({
    type: 'REMOVE_REPORT',
    id
})

export const startRemoveReport = ({id}={})=> {
    return (dispatch,getState)=>{
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/reports/${id}`).remove().then(()=>{
            dispatch(removeReport({id}))
        })
    }
}

export const editReport = (id, updates) => ({
    type: 'EDIT_REPORT',
    id,
    updates
})

export const startEditReport = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/reports/${id}`).update(updates).then(() => {
            dispatch(editReport(id, updates))
        })
    }
}