export function findDate( days : number ) : string[] {
    const day : string[] =["S","M","T","W","T","F","S"]
    var date : Date = new Date();
    var last : Date = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
    if(last.getDate()>9)
        return [`${last.getMonth()+1}/${last.getDate()}`,`${day[last.getDay()]}`];
    return [`${last.getMonth()+1}/0${last.getDate()}`,`${day[last.getDay()]}`];
}