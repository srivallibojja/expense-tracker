import fetchHandler, { FetchOptions } from '../../common-utils/fetchHandler';
import { PomodoroTypes } from '../types';

// Base URLs of the microservices being used (Set/Update this URL in ".env" file)...
const baseUrl = "https://calpal.xyz/pomodoro";

export const getTimer = (
  uid: string,
  successHandler?: (response: any) => void,
  errorHandler?: (response: any) => void
) => {
  const fetchOptions: FetchOptions = {
    url: `${baseUrl}/pomodoro/get-timerId/${uid}`,
    method: 'GET',
    actionType: PomodoroTypes.ACTION.GET_TIMER
  };
  return fetchHandler(fetchOptions, successHandler, errorHandler);
};

export const getSessions = (
  uid: string,
  successHandler?: (response: any) => void,
  errorHandler?: (response: any) => void
) => {
  const fetchOptions: FetchOptions = {
    url: `${baseUrl}/pomodoroSessions/get-sessions-data/${uid}`,
    method: 'GET',
    actionType: PomodoroTypes.ACTION.GET_SESSIONS
  };
  return fetchHandler(fetchOptions, successHandler, errorHandler);
};

export const getLevels = (
  uid: string,
  successHandler?: (response: any) => void,
  errorHandler?: (response: any) => void
) => {
  const fetchOptions: FetchOptions = {
    url: `${baseUrl}/pomodoroLevels/get-level/${uid}`,
    method: 'GET',
    actionType: PomodoroTypes.ACTION.GET_LEVELS
  };
  return fetchHandler(fetchOptions, successHandler, errorHandler);
};

export const getLogin = (
  uid: string,
  successHandler?: (response: any) => void,
  errorHandler?: (response: any) => void
) => {
  const fetchOptions: FetchOptions = {
    url: `${baseUrl}/login/get-login/${uid}`,
    method: 'GET',
    actionType: PomodoroTypes.ACTION.GET_LOGIN
  };
  return fetchHandler(fetchOptions, successHandler, errorHandler);
};

export const resetTimer = () => {
  return (dispatch: any) => {
    dispatch({
      type: PomodoroTypes.ACTION.RESET_TIMERS,
      payload: null
    });
  };
};

export const startTimer = (newTimer: number) => {
  return (dispatch: any) => {
    dispatch({
      type: PomodoroTypes.ACTION.START_TIMER,
      payload: newTimer
    });
  };
};

export const toggleTimerLabel = (timerLabel: string) => {
  return (dispatch: any) => {
    dispatch({
      type: PomodoroTypes.ACTION.TOGGLE_TIMER_LABEL,
      payload: timerLabel
    });
  };
};

export const toggleIsBusyIndicator = (busyIndicator: boolean) => {
  return (dispatch: any) => {
    dispatch({
      type: PomodoroTypes.ACTION.TOGGLE_ISBUSY_INDICATOR,
      payload: busyIndicator
    });
  };
};

export const increaseBreakValue = (breakValue: number) => {
  return (dispatch: any) => {
    dispatch({
      type: PomodoroTypes.ACTION.INCREASE_BREAK_VALUE,
      payload: breakValue
    });
  };
};

export const decreaseBreakValue = (breakValue: number) => {
  return (dispatch: any) => {
    dispatch({
      type: PomodoroTypes.ACTION.DECREASE_BREAK_VALUE,
      payload: breakValue
    });
  };
};

export const increaseSessionValue = (sessionValue: number) => {
  return (dispatch: any) => {
    dispatch({
      type: PomodoroTypes.ACTION.INCREASE_SESSION_VALUE,
      payload: sessionValue
    });
  };
};

export const decreaseSessionValue = (sessionValue: number) => {
  return (dispatch: any) => {
    dispatch({
      type: PomodoroTypes.ACTION.DECREASE_SESSION_VALUE,
      payload: sessionValue
    });
  };
};
