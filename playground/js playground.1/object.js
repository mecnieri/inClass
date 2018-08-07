
let converter = {
    celsius(farenheit) {
        return `${(farenheit - 32) * 5 / 9}`;
    },
    kelvin(farenheit) {
        return `${farenheit} farenheit is  ${(farenheit + 459.67) * 5 / 9} in kelvin `
    }
}

console.log(converter.kelvin(19));
console.log(typeof(converter.kelvin(19)));

let converter2 = {
    celsiusAndKelvin(farenheit) { 
        return `${farenheit} farenheit is ${(farenheit - 32) * 5 / 9} in celsius and ${(farenheit + 459.67) * 5 / 9} in kelvin `
    }
}

console.log(converter2.celsiusAndKelvin(41));
console.log(typeof(converter2.celsiusAndKelvin(41)));



let convertFarenheit = function (farenheit) {
    return {
        "farenheit": farenheit,
        "celsius": (farenheit + 459.67) * 5 / 9,
        "kelvin": (farenheit + 459.67) * 5 / 9,
    }
}

console.log(convertFarenheit(30));
console.log(typeof(convertFarenheit(30)));