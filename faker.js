var faker = require('faker');
function generateProfiles()
{
    var information = [];
    for(var id = 0;id<10000 ; id++)
    {
        var firstname = faker.name.firstName();
        var age = faker.random.number({min:1990, max:2017});
        //var contact = faker.phone.phoneNumber();
        var company = faker.company.companyName();
        var city = faker.address.city()  ;       //=> "Oslo"
        
        information.push({
            "id" : id,
            "Name" : company,
            "Year"  : age,
            "Poster" : company,
            "Type" : firstname,
        })
    }
    return{"information" : information}
}
generateProfiles();
module.exports = generateProfiles