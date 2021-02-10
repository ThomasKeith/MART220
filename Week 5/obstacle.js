class obstacle {
    constructor(image,x,y)
    {
      this.image = image;
      this.x = x;
      this.y = y;
    }

    getImage()
    {
        var myImage = loadImage(this.image);
        return myImage;
    }
  
    getX()
    {
        return this.x;
    }
    getY()
    {
        return this.y;
    }
  }