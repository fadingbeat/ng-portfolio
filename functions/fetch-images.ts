const sstk = require('shutterstock-api');

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const imagesApi = new sstk.ImagesApi();
let imgId = '';

imagesApi
    .getImage(imgId)
    .then((data: any) => {
        console.log(data);
    })
    .catch((error: any) => {
        console.error(error);
    });
