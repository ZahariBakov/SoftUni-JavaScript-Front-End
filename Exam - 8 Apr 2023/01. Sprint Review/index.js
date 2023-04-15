// function solve(input) {
//     const number = Number(input.shift());
//     const allPeople = {};

//     const commands = {
//         'Add New': addNew,
//         'Change Status': changeStatus,
//         'Remove Task': removeTask
//     }

//     for (let i = 0; i < number; i++) {
//         const [ assignee, taskId, title, status, estimatedPoints ] = input.shift().split(':');

//         if(!allPeople.hasOwnProperty(assignee)) {
//             allPeople[assignee] = { taskId, title, status, estimatedPoints };
//         }

//         else {
//             allPeople[assignee].taskId += `, ${taskId}`;
//             allPeople[assignee].title += `, ${title}`;
//             allPeople[assignee].status += `, ${status}`;
//             allPeople[assignee].estimatedPoints += `, ${estimatedPoints}`;
//         }
//     }

//     for (const line of input) {
//         const currentLine = line.split(':');
//         const currentCommand = currentLine[0];

//         commands[currentCommand](...currentLine.slice(1));
//     }

//     function addNew( assignee, newTaskId,newTitle, newStatus, newEstimatedPoints ) {
//         if(allPeople.hasOwnProperty(assignee)) {
//             allPeople[assignee].taskId += `, ${newTaskId}`;
//             allPeople[assignee].title += `, ${newTitle}`;
//             allPeople[assignee].status += `, ${newStatus}`;
//             allPeople[assignee].estimatedPoints += `, ${newEstimatedPoints}`;
//         }
        
//         else {
//             console.log(`Assignee ${assignee} does not exist on the board!`)
//         }
//     }

//     function changeStatus( assignee, taskId, newStatus ) {
//         if(allPeople.hasOwnProperty(assignee)) {
//             if(allPeople[assignee].taskId === taskId) {
//                 allPeople[assignee].status = newStatus;
//             }

//             else {
//                 console.log(`Task with ID ${taskId} does not exist for ${assignee}!`)
//             }
//         }

//         else {
//             console.log(`Assignee ${assignee} does not exist on the board!`)
//         }
//     }

//     function removeTask( assignee, index ) {
//         if(allPeople.hasOwnProperty(assignee)) {
//             let currentTasks = allPeople[assignee].taskId.split(', ');
            
//             if(currentTasks.length > index) {
//                 let currentTasks = allPeople[assignee].taskId.split(', ');
//                 currentTasks.splice(index, 1);
//                 allPeople[assignee].taskId = currentTasks.join(', ');
                
//                 let currentTitle = allPeople[assignee].title.split(', ');
//                 currentTitle.splice(index, 1);
//                 allPeople[assignee].title = currentTitle.join(', ');

//                 let currentStatus = allPeople[assignee].status.split(', ');
//                 currentStatus.splice(index, 1);
//                 allPeople[assignee].status = currentStatus.join(', ');

//                 let currentEstimate = allPeople[assignee].estimatedPoints.split(', ');
//                 currentEstimate.splice(index, 1);
//                 allPeople[assignee].estimatedPoints = currentEstimate.join(', ');
//             }

//             else {
//                 console.log('Index is out of range!');
//             }
//         }

//         else {
//             console.log(`Assignee ${assignee} does not exist on the board!`)
//         }
//     }

//     let todoPts = 0;
//     let inProgressPts = 0;
//     let codeReviewPts = 0;
//     let donePts = 0;

//     Object.values(allPeople).forEach((person) => {
//         if(person.status.length > 0) {
//             let currentStatus = person.status.split(', ');
//             let currentEstimate = person.estimatedPoints.split(', ');
//             let num = currentStatus.length;
//             for (let i = 0; i < num; i++) {
//                 if(currentStatus[i] === 'ToDo') {
//                     todoPts += Number(currentEstimate[i]);
//                 }
                
//                 else if(currentStatus[i] === 'In Progress') {
//                     inProgressPts += Number(currentEstimate[i]);
//                 }

//                 else if(currentStatus[i] === 'Code Review') {
//                     codeReviewPts += Number(currentEstimate[i]);
//                 }

//                 else {
//                     donePts += Number(currentEstimate[i]);
//                 }
//             }
//         }
//     })

//     console.log(`ToDo: ${todoPts}pts`);
//     console.log(`In Progress: ${inProgressPts}pts`);
//     console.log(`Code Review: ${codeReviewPts}pts`);
//     console.log(`Done Points: ${donePts}pts`);

//     let sum = todoPts + inProgressPts + codeReviewPts;

//     if(sum > donePts) {
//         console.log('Sprint was unsuccessful...');
//     }

//     else {
//         console.log('Sprint was successful!');
//     }
// }


function solve(input) {
    const number = input.shift();
    const allPeople = {};

    const commands = {
        'Add New': addNew,
        'Change Status': changeStatus,
        'Remove Task': removeTask
    }
    
    for (let i = 0; i < number; i++) {
        const [ name, newTaskId, newTitle, newStatus, newPoints ] = input.shift().split(':');

        if(!allPeople.hasOwnProperty(name)) {
            allPeople[name] = {taskId: [], title: [], status: [], points: []};
        }

        allPeople[name].taskId.push(newTaskId);
        allPeople[name].title.push(newTitle);
        allPeople[name].status.push(newStatus);
        allPeople[name].points.push(newPoints);
    }

    for (const line of input) {
        const currentLine = line.split(':');
        const currentCommand = currentLine[0];

        commands[currentCommand](...currentLine.slice(1));
    }

    function addNew( name, newTaskId, newTitle, newStatus, newPoints ) {
        if(!allPeople.hasOwnProperty(name)) {
            console.log(`Assignee ${name} does not exist on the board!`);
        }

        else {
            allPeople[name].taskId.push(newTaskId);
            allPeople[name].title.push(newTitle);
            allPeople[name].status.push(newStatus);
            allPeople[name].points.push(newPoints);
        }
    }

    function changeStatus( name, searchedTaskId, newStatus ) {
        if(!allPeople.hasOwnProperty(name)) {
            console.log(`Assignee ${name} does not exist on the board!`);
        }

        else if(!allPeople[name].taskId.includes(searchedTaskId)) {
            console.log(`Task with ID ${searchedTaskId} does not exist for ${name}!`)
        }

        else {
            const index = allPeople[name].taskId.indexOf(searchedTaskId);
            allPeople[name].status.splice(index, 1, newStatus);
        }
    }

    function removeTask( name, index ) {
        if(!allPeople.hasOwnProperty(name)) {
            console.log(`Assignee ${name} does not exist on the board!`);
        }

        else if(index < 0 || index >= allPeople[name].taskId.length) {
            console.log('Index is out of range!');
        }

        else {
            allPeople[name].taskId.splice(index, 1);
            allPeople[name].title.splice(index, 1);
            allPeople[name].status.splice(index, 1);
            allPeople[name].points.splice(index, 1);
        }
    }

    let todoPts = 0;
    let inProgressPts = 0;
    let codeReviewPts = 0;
    let donePts = 0;

    Object.values(allPeople).forEach((person) => {
        for (let i = 0; i < person.status.length; i++) {
            if(person.status[i] === 'ToDo') {
                todoPts += Number(person.points[i])
            }

            else if(person.status[i] === 'In Progress') {
                inProgressPts += Number(person.points[i]);
            }

            else if(person.status[i] === 'Code Review') {
                codeReviewPts += Number(person.points[i]);
            }

            else {
                donePts += Number(person.points[i]);
            }
        }
        
    })

    console.log(`ToDo: ${todoPts}pts`);
    console.log(`In Progress: ${inProgressPts}pts`);
    console.log(`Code Review: ${codeReviewPts}pts`);
    console.log(`Done Points: ${donePts}pts`);

    let sum = todoPts + inProgressPts + codeReviewPts;

    if(sum > donePts) {
        console.log('Sprint was unsuccessful...');
    }

    else {
        console.log('Sprint was successful!');
    }
}


solve(
    [
        '5',
        'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
        'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
        'Peter:BOP-1211:POC:Code Review:5',
        'Georgi:BOP-1212:Investigation Task:Done:2',
        'Mariya:BOP-1213:New Account Page:In Progress:13',
        'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
        'Change Status:Peter:BOP-1290:ToDo',
        'Remove Task:Mariya:1',
        'Remove Task:Joro:1',
    ]
);

solve(
    [
        '4',
        'Kiril:BOP-1213:Fix Typo:Done:1',
        'Peter:BOP-1214:New Products Page:In Progress:2',
        'Mariya:BOP-1215:Setup Routing:ToDo:8',
        'Georgi:BOP-1216:Add Business Card:Code Review:3',
        'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
        'Change Status:Georgi:BOP-1216:Done',
        'Change Status:Will:BOP-1212:In Progress',
        'Remove Task:Georgi:3',
        'Change Status:Mariya:BOP-1215:Done',
    ]
);
