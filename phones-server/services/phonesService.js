export function getPhones(req, res) {
    res.send([{
        "year": 2021,
        "province": "Almeria"
    }]);
}

export function findByyear(req, res) {
    res.send({
        "year": 2021,
        "province": "Almeria"
           
    });
}

