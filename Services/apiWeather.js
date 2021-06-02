import axios from "axios"


export const cityConsult = async (city) => {
    //Pegar o cep e juntar o endereço do viaCep https://viacep.com.br/ws/54450180/json/
    const url = `https://goweather.herokuapp.com/weather/${city}`

    const res = await axios.get(url);

    //Tratar os dados que vieram da api   
    const cidade = {
        temperature: res.data.temperature,
        wind: res.data.wind,
        description: res.data.description,
        forecast: [
            {
                day: res.data.day,
                temperature: res.data.temperature,
                wind: res.data.wind
            },

            {
                day2: res.data.day,
                temperature2: res.data.temperature,
                wind2: res.data.wind

            }
        ],        
    };

    return cidade;
};