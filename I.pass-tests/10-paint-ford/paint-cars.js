function paintShop(carsArrays){
    var pinkCarsArrays = carsArrays.filter(make=>make.colour === "pink")
    return pinkCarsArrays;
};
module.exports = paintShop;