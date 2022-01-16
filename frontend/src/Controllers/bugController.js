import bugModel from '../Models/bugModel'

export async function retrieveBugs() {
    let data = [];
    let response = await fetch('http://localhost:3500/bugs/', {method: 'GET'});
    let result = await response.json();
    for (let i=0;i<result.length;i++) {
        data.push(new bugModel(result[i]))
    }
    setTimeout(() => {console.log(data)}, 1000);
    return data;


/*     data.push(new bugModel({
        _id:23456789,
        name:"Crash on Load",
        details:"Crashes after 3 seconds",
        steps:"Open application and it will crash",
        version:"V2.0",
        assigned:"Joe Clark",
        creator:"Alex Cordero",
        priority: 1,
        time:"23:45"
    }))
    data.push(new bugModel({
        _id:23456790,
        name:"Won't Load",
        details:"The application will not load",
        steps:"Open application and it won't load",
        version:"V2.0",
        assigned:"Joe Clark",
        creator:"Alex Cordero",
        priority: 3,
        time:"23:49"
    }))

    let sorted = data.sort((a,b)=>{return a.priority - b.priority})
    setTimeout(() => {console.log(sorted)}, 3000);
    return sorted; */

    // return fetchBugs().then(result => {console.log(result)}).catch(err => console.err(err));
}