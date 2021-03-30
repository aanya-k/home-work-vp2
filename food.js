class Food{
    constructor(){
        this.lastFed;
        this.getFoodStock;
        this.updateFoodStock
        this.deductFoodStock;
    }

    preload(){
        this.milkBottle = loadImage("images/Milk.png");
    }

    display(){
        imageMode(CENTER);
        if(foodStock<=20 && foodStock>0){
            for(var i=30; i<(foodS+1)*30; i+=30){
                image(this.milkBottle, i, i);
            }
        }
        else{
        }
        
    }
}