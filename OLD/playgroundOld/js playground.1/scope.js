

// ფუნქციის გამოსაძახებლად, ფუნქციის შესასრულებლად აუცილებელია ფრჩხილები !!! ()

const visibleLightWaves_2 = () => {
    let lightWaves = 'Moonlight';
    console.log(lightWaves);
}
visibleLightWaves_2();

//ფუნქცია არ გამოიძახა, არ შეასრუალა, მგონი ობიექტი ასახა

const visibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    console.log(lightWaves);
}
console.log(visibleLightWaves);


// ფუნქციის გამოსაძახებლად, ფუნქციის შესასრულებლად აუცილებელია ფრჩხილები !!! ()
const visibleLightWaves_1 = () => {
    let lightWaves = 'Moonlight';
    console.log(lightWaves);
}
console.log(visibleLightWaves_1());




const colorOfSky = () => {
    const dusk = true;
    let color = 'blue';
    if (dusk) {
        let color = 'pink';
        console.log(color); // pink
    }
    console.log(color); // blue 
};

colorOfSky(); // blue
console.log(color); // ReferenceError : color is not defined





