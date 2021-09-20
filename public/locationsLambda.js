exports.handler = async (event) => {
    const json_data = [{"id":0,"locationName":"Mad Duck","locationDescription":"Mad Duck is a premium coffee joint serving St Alfred coffee. Located in the heart of Melbourne","locationPhoto":"coffee-place-01.png","locationStars":4.8,"locationReview":"Was amazing! Definitely going back!"},{"id":1,"locationName":"Coffee Mountain","locationDescription":"Located in the Dandenongs, Coffee Mountain is famous for it's special origin cold press coffee","locationPhoto":"coffee-place-02.png","locationStars":4.6,"locationReview":"Really nice and had a great view looking back to Melbourne"},{"id":2,"locationName":"St Alfreds","locationDescription":"Near Port Melbourne, St Alfreds has what is regarded as Melbournes best long macchiato","locationPhoto":"coffee-place-03.png","locationStars":4.7,"locationReview":"Their magic cup was AMAZING!!!"},{"id":3,"locationName":"BestPress","locationDescription":"BestPress is a boutique coffee joint located at the foot of the Dandenongs","locationPhoto":"coffee-place-04.png","locationStars":4.3,"locationReview":"Very nice, close to home and i grab my coffee beans from there"},{"id":1,"locationName":"Guidos Coffee and Burgers","locationDescription":"An outer Melbourne coffee shop that specialises in American style burgers for lunch","locationPhoto":"coffee-place-05.png","locationStars":4.5,"locationReview":"Coffee is okay, but the burgers are classic american and very tastey"}]
    const querystring = event.queryStringParameters;
    let res;
    
    if (querystring == null) {
        res = json_data;
    } else {
        res = json_data[querystring.id];
    }
    
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify(res),
    };
    return response;
};