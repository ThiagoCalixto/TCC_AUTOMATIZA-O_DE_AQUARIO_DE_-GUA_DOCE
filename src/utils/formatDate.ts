import { format, parseISO } from 'date-fns';



function formatHour(hour: number): string {
  let newHour;
  if(hour.toString().length <= 1) {
    newHour = `0${hour}`
  } else {
    newHour = hour.toString()
  }
  
  return newHour
}

export function formatToBirthdate(date: Date): string {
  let data
  
  if(date){
    data = format(parseISO(date.toString()), 'dd/MM/yyyy')
  }
  
  return `${data}`;
}

export function formatToBirthdateAndHours(date: Date): string {
  let data;
  
  if(date) {
    data = format(parseISO(date.toString()), 'dd/MM/yyyy')
  }
  
  return `${data} - ${formatHour(parseISO(date.toString()).getHours())}h : ${formatHour(parseISO(date.toString()).getMinutes())}`;
}