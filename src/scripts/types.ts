export interface DailyWeather {
    date : Date
    weatherCode : number,
    temperature : number,
    windSpeed : number,
    radiationAmount : number
}

export interface City {
    name : string,
    geoCode : { latitude : number, longitude : number }
}

export class Condition {
    readonly title : string
    readonly codes : number[]
    readonly iconFilename : string

    static readonly CLEAR = new Condition('Clear', [ 0 ], 'clear.png')
    static readonly PARTIALLY_CLOUDY = new Condition('Partially cloudy', [ 1, 2, 3 ],
        'partially-cloudy.png')
    static readonly FOG = new Condition('Fog', [ 45, 48 ], 'fog.png')
    static readonly DRIZZLE = new Condition('Drizzle', [ 51, 53, 55, 56, 57 ], 'drizzle.png')
    static readonly RAIN = new Condition('Rain', [ 61, 63, 65, 66, 67 ], 'rain.png')
    static readonly SNOWFALL = new Condition('Snowfall', [ 71, 73, 75, 77 ], 'snowfall.png')
    static readonly RAIN_SHOWER = new Condition('Rain shower', [ 80, 81, 82 ], 'rain-shower.png')
    static readonly SNOW_SHOWER = new Condition('Snow shower', [ 85, 86 ], 'snow-shower.png')
    static readonly THUNDERSTORM = new Condition('Thunderstorm', [ 95, 96, 99 ], 'thunderstorm.png')

    static readonly ALL_CONDITIONS = [ this.CLEAR, this.PARTIALLY_CLOUDY, this.FOG, this.DRIZZLE, this.RAIN,
        this.SNOWFALL, this.RAIN_SHOWER, this.SNOW_SHOWER, this.THUNDERSTORM ]

    private constructor (title : string, codes : number[], pathToIcon : string) {
        this.title = title
        this.codes = codes
        this.iconFilename = pathToIcon
    }
}

export type DropDownItem = {
    name : string,
    link? : string
}