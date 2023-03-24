import { Injectable } from "@angular/core";
import { City } from "../data/cities";
import { WEATHER_DATA } from "../data/weather";

export interface WeatherRow {
  date: string;
  time: string;
  temp: number;
}

@Injectable({ providedIn: "root" })
export class SearchService {
  public getWeatherByCity(city: City): WeatherRow[] {
    let cityWeather = WEATHER_DATA.find(c=>c.city === city.name);
    if(!cityWeather){
      return [];
    }
    let results: WeatherRow[] = [];
    for(let i=0; i<cityWeather.hourly.time.length; i++){
      let row = {date:cityWeather.hourly.time[i].slice(0,10), temp:cityWeather.hourly.temperature_2m[i], time:cityWeather.hourly.time[i].slice(11,16)} as WeatherRow;
      results.push(row);
    }
    let date1 = cityWeather.hourly.time[0];
    let temp1 = cityWeather.hourly.temperature_2m[0];
    let date2 = cityWeather.hourly.time[1];
    let temp2 = cityWeather.hourly.temperature_2m[1];

    // TODO assemble results based on input city
    return results;
  }
}
