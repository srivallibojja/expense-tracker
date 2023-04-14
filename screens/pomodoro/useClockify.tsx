export function useClockify(timerValue : number) {
    if(timerValue!==undefined){
        let minutes : string | number = Math.floor(timerValue / 60);
        let seconds : string | number = timerValue - (minutes * 60);
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        return `${minutes}:${seconds}`;
    }
}