import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer nmz48F1d55pdm2PSHFa9ZzsUYB8g_10NI2NFGMnTZgj7rfBTnoaLqE0XJkGMXjHQktf5jbHFtGJXBBGGeWnyX2PERv7vuL0xtkqHD_j2zifz0bLOcw8Y3biS1IADXnYx'
    }
});