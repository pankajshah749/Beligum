const flag = document.querySelector('.flag2');
const form = document.querySelector('form');
const coutry = document.querySelector('.country');
const nativename = document.querySelector('.nativename');
const languages = document.querySelector('.lan');
const population = document.querySelector('.populate');
const region = document.querySelector('.Reegion');
const domain = document.querySelector('.domain')
const sub = document.querySelector('.sub')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.querySelector('.inputbox').value
    console.log(input)
    fetch(`https://restcountries.com/v3.1/name/${input}`)
        .then(function (data) {
            return data.json();

        })
        .then(function (jsondata) {
            console.log(jsondata)
            const flagurl = jsondata[0].flags.png;
            flag.src = flagurl;
            
            let nativenamekey=Object.keys(jsondata[0].name.nativeName)[0];
            nativenamekey.innerHTML = jsondata[0].name.nativeName[nativenamekey].common;

            coutry.innerHTML = jsondata[0].name.common;
            domain.innerHTML = jsondata[0].tld;
            population.innerHTML = jsondata[0].population;
            region.innerHTML = jsondata[0].region;
            sub.innerHTML = jsondata[0]


            const languages = jsondata[0].languages
            console.log(languages);
            // language.innerHTML= language;

            
            

        })
})