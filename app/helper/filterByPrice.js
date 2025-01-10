function filterByPrice(min,max,cars){
    const newCars=cars.filter(car=>car.price>=min && car.price<=max)
    return newCars;
}

export default filterByPrice;