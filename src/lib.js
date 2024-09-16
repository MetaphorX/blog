export const maleShoesQuery = `*[_type == "male-shoes"]{
_id,    
image{
    asset ->{
        url
        }
    }
}`;

export const femaleShoesQuery = `*[_type == "female-shoes"]{
_id,    
image{
    asset ->{
        url
        }
    }
}`;

export const maleFashionQuery = `*[_type == "male-fashion"]{
_id,    
image{
    asset ->{
        url
        }
    }
}`;

export const kidsQuery = `*[_type == "kids"]{
_id,    
image{
    asset ->{
        url
        }
    }
}`;

export const othersQuery = `*[_type == "others"]{
_id,    
image{
    asset ->{
        url
        }
    }
}`;

export const dressQuery = `*[_type == "dress"]{
_id,    
image{
    asset ->{
        url
        }
    }
}`;

