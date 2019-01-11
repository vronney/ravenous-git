const apiKey = 'qkngjNASySDRtKdy9w3CZI9BizsvxAStskPZGW406ZHJn2zDN6JFhNVTU8srnGyRJ1Hg3PFaMWhU6Rz5Ohu8Cm27VB8TB6U4y-ATtlElx-66cAQQLtDXY2d_JP3VW3Yx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                }
         }).then(response => {
            return response.json();
         }).then(jsonResponse => {
            console.log(response);
            if (jsonResponse.businesses) {
                console.log(jsonResponse.businesses);
                return jsonResponse.businesses.map(business => {
                    return {
                    id: business.id,
                    url: business.url,    
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                    }
                });
            }
        });
    }
};

export default Yelp;
