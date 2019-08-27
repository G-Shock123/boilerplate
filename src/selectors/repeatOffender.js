
const exampleState = [
    {
        title: 'First report',
        body: 'first body',
        abuser: 'John'
    },
    {
        title: 'second report',
        body: 'second body',
        abuser: 'John'
    },
    {
        title: 'Third report',
        body: 'Third body',
        abuser: 'Jarret'
    },
    {
        title: 'Fourth report',
        body: 'Fourth body',
        abuser: 'John'
    },
    {
        title: 'Fifth report',
        body: 'Fifth body',
        abuser: 'Mitch'
    },
    {
        title: 'sixth report',
        body: 'sixth body',
        abuser: 'Jarret'
    },
    
]
export default (state, limit)=>{
    let count, x, y, z
    let allOffenders = state.map(abuser => abuser.abuser)
    const arrLength = state.length
    const repeatOffenders = []
    const repeatOffendersTally = []
    const frequentOffendersTally = []




    for (x = 0; x < arrLength; x++) {
        if (!repeatOffenders.includes(allOffenders[x])) {
            count = 0
            repeatOffenders.push(allOffenders[x])
            for (y = 0; y < arrLength; y++) {
                if (allOffenders[x] === allOffenders[y]) {
                    count = count + 1
                }
            }
            repeatOffendersTally.push({ abuser: allOffenders[x], count: count })

            for (z = 0; z < repeatOffendersTally.length; z++) {
                if (repeatOffendersTally[z].count >= limit && !frequentOffendersTally.includes(repeatOffendersTally[z])) {
                    frequentOffendersTally.push(repeatOffendersTally[z])
                }
            }
        }

    }


    return(frequentOffendersTally)




}




/*
This function determines how many times each unique abuser has been called
It returns an array of objects called RepeatAbusers
The objects in this array have the abusers name, and how many times they've been listed

How does it do this?
1. For the entire area check if report.abuser is included in the repeatOffender array
2. If it is not included then check if report.abuser === any of the items in the reports array
3. For each match, count = count++
4. If count > 0 then pass the abusers name into the repeatOffender list


*/

